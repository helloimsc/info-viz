import spotipy
from spotipy.oauth2 import SpotifyClientCredentials, SpotifyOAuth
import requests
from bs4 import BeautifulSoup
from KEYS import SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, GENIUS_API_KEY
from itertools import dropwhile
import pandas as pd
from fuzzywuzzy import fuzz
import re
import time
import os

# Initialize Spotify API client
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(
    client_id=SPOTIFY_CLIENT_ID,
    client_secret=SPOTIFY_CLIENT_SECRET
))

def search_artist_on_spotify(artist_name):
    """Search for an artist based on name on Spotify and return its details."""
    results = sp.search(q=artist_name, limit=20, type="artist")
    is_found = False
    genre = None
    num_followers = 0
    artist_id = None
    name = None
    popularity = 0
    if results:
        items = results["artists"]["items"]
        for item in items:
            # check if this is the correct artist
            name = item["name"]
            name_sim = fuzz.ratio(artist_name, name)
            if name_sim > 78:
                is_found = True
                # get the rest of the details
                genre = item["genres"]
                num_followers = item["followers"]["total"]
                artist_id = item["id"]
                popularity = item["popularity"]
                break
    return is_found, name, genre, artist_id, num_followers, popularity
            

def search_song_on_spotify(song_name, artist_name=None):
    """Search for a song on Spotify and return its details."""
    query = song_name
    if artist_name:
        query += f" {artist_name}"
    results = sp.search(q=query, limit=20, type='track')
    is_found = False
    artists = []
    duration_ms, track_id, popularity = None, None, None
     
    if results['tracks']['items']:
        tracks = results['tracks']['items']
        # match the name of song to make sure getting the correct ones
        for track in tracks:
            artists = ', '.join([artist["name"] for artist in track["artists"]])
            name = track["name"]
            artists_sim = fuzz.ratio(artist_name, artists)
            name_sim = fuzz.ratio(name, song_name)
            # meaning it's the right song
            if artists_sim >= 78 and name_sim >= 78:
                is_found = True
                duration_ms = track["duration_ms"]
                track_id = track["id"]
                popularity = track["popularity"]
                break
    return is_found, song_name, artists, duration_ms, track_id, popularity
       
       
def get_audio_features_on_spotify(track_id):
    """
        Get the audio features from spotify API with track id
        Spotify stopped this API usage from November
        so not able to get data anymore
    """
    try:
        results = sp.audio_analysis(track_id)
        print(results)
    except spotipy.SpotifyException as e:
        print(f"Error {e.http_status}: {e.msg}")

def search_lyrics_on_genius(song_name, artist_name):
    """Search for a song on Genius and return the URL of the lyrics page."""
    base_url = "https://api.genius.com"
    headers = {"Authorization": f"Bearer {GENIUS_API_KEY}"}
    search_url = f"{base_url}/search"
    # remove parentheses and its content
    # tested in Genius it's sensitive and the result is bad
    # purely title only
    query = re.sub(r"\(.*?\)", "", song_name)
    
    response = requests.get(search_url, headers=headers, params={"q": query})
    
    # print(f"getting lyrics for {song_name} by {artist_name}")
    if response.status_code == 200:
        # print(response.json())
        hits = response.json()["response"]["hits"]
        lyric_url = None
        is_complete = False
        primary_artist = None
        artists = None
        release_date = None
        if hits:
            for i, hit in enumerate(hits):
                # the result comes back with 10 songs in a list
                # check for name of song & artist to make sure getting the right song lyrics
                name_sim = fuzz.ratio(query, hit["result"]["title"])
                artist_sim = fuzz.ratio(artist_name,hit["result"]["artist_names"])
                # print(f"name similarity: {name_sim} and artist similarity: {artist_sim}")
                if name_sim >=78 and artist_sim >= 78:
                    primary_artist = hit["result"]["primary_artist"]["name"]
                    artists = ', '.join([artist["name"] for artist in hit["result"]["primary_artists"][1:]])
                    # print(artists)
                    release_date = hit["result"]["release_date_for_display"]
                    if hit["result"]["lyrics_state"] == "complete":
                        is_complete = True
                        lyric_url = hit["result"]["url"]
                        break
            return is_complete, lyric_url, primary_artist, artists, release_date
    
    return is_complete, lyric_url, primary_artist, artists, release_date

def scrape_lyrics(lyrics_url):
    """Scrape lyrics from a Genius lyrics page."""
    response = requests.get(lyrics_url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        lyrics_div = soup.find("div", class_="lyrics")
        if lyrics_div:
            return lyrics_div.get_text(strip=True, separator="\n")
        else:
            # Some Genius pages use a different structure
            lyrics_container = soup.find_all("div", attrs={"data-lyrics-container": "true"})
            lyrics = "\n".join(span.get_text(strip=True, separator="\n") for span in lyrics_container)
            return lyrics
        
    return "Lyrics not found."

def get_song_lyrics(song_name, artist_name=None):
    """Main function to get song lyrics."""
    song_data = search_song_on_spotify(song_name, artist_name)
    if not song_data:
        return False, "Song not found on Spotify."

    genius_url = search_lyrics_on_genius(song_data["song_name"], song_data["artist_name"])
    if not genius_url:
        return False, "Lyrics not found on Genius."

    lyrics = scrape_lyrics(genius_url)
    return True, lyrics


# df = pd.read_pickle("data/lyrics_25000.pkl")
# for i in range(25000, 25200, 100):
#     for row in df[i:i+100].itertuples(index=True):  # Set index=True if you need the index
        
#         print(f"{row.Index}, {row.track_name}, {row.artist_names}")
#         is_found, lyric_url, primary_artist, feat_artists, release_date = search_lyrics_on_genius(song_name=row.track_name, artist_name=row.artist_names)
#         df.loc[row.Index, "has_lyrics"] = is_found
#         df.loc[row.Index, "lyric_url"] = lyric_url
#         df.loc[row.Index, "primary_artist"] = primary_artist
#         df.loc[row.Index, "feat_artist"] = feat_artists
#         df.loc[row.Index, "release_date"] = release_date
#         if is_found:
#             lyrics = scrape_lyrics(lyrics_url=lyric_url)
#             df.loc[row.Index, "lyrics"] = lyrics
#             df.loc[row.Index, "scraped"] = True
#     filename = f"data/lyrics_{i+100}.pkl"
#     df.to_pickle(filename)
#     to_delete = f"data/lyrics_{i-200}.pkl"
#     if os.path.exists(to_delete):
#         os.remove(to_delete)
    
#     time.sleep(60)