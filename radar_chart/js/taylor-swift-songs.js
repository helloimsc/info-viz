const weekndSongs = [
    {
        track_name:"Cry For Me",popularity_new:89.0,danceability:0.647,valence:0.422,energy:0.645,acousticness:0.0871,instrumentalness:0.0,liveness:0.671,speechiness:0.0303
    },
    {
        track_name:"Timeless",popularity_new:88.0,danceability:0.769,valence:0.57,energy:0.722,acousticness:0.0584,instrumentalness:0.00000256,liveness:0.111,speechiness:0.0507
    },
    {
        track_name:"Blinding Lights",popularity_new:88.0,danceability:0.514,valence:0.334,energy:0.73,acousticness:0.00146,instrumentalness:0.0000954,liveness:0.0897,speechiness:0.0598
    },
    {
        track_name:"Starboy",popularity_new:88.0,danceability:0.679,valence:0.486,energy:0.587,acousticness:0.141,instrumentalness:0.00000635,liveness:0.137,speechiness:0.276
    },
    {
        track_name:"Save Your Tears",popularity_new:85.0,danceability:0.68,valence:0.644,energy:0.826,acousticness:0.0212,instrumentalness:0.0000124,liveness:0.543,speechiness:0.0309
    },
    {
        track_name:"The Hills",popularity_new:85.0,danceability:0.585,valence:0.137,energy:0.564,acousticness:0.0671,instrumentalness:0.0,liveness:0.135,speechiness:0.0515
    },
    {
        track_name:"Die For You",popularity_new:85.0,danceability:0.586,valence:0.508,energy:0.525,acousticness:0.111,instrumentalness:0.0,liveness:0.134,speechiness:0.0615
    },
    {
        track_name:"Call Out My Name",popularity_new:84.0,danceability:0.461,valence:0.175,energy:0.593,acousticness:0.17,instrumentalness:0.0,liveness:0.307,speechiness:0.0356
    },
    {
        track_name:"I Was Never There",popularity_new:83.0,danceability:0.323,valence:0.155,energy:0.737,acousticness:0.142,instrumentalness:0.000162,liveness:0.163,speechiness:0.0338
    },
    {
        track_name:"Popular (with Playboi Carti & Madonna) - From The Idol Vol. 1 (Music from the HBO Original Series)",popularity_new:82.0,danceability:0.855,valence:0.852,energy:0.678,acousticness:0.0569,instrumentalness:0.0000369,liveness:0.412,speechiness:0.189
    },
    {
        track_name:"Reflections Laughing (feat. Travis Scott, Florence + The Machine)",popularity_new:81.0,danceability:0.33,valence:0.0382,energy:0.355,acousticness:0.135,instrumentalness:0.00726,liveness:0.131,speechiness:0.0355
    },
    {
        track_name:"Is There Someone Else?",popularity_new:81.0,danceability:0.702,valence:0.608,energy:0.586,acousticness:0.0388,instrumentalness:0.0000727,liveness:0.156,speechiness:0.0313
    },
    {
        track_name:"Can't Feel My Face",popularity_new:81.0,danceability:0.705,valence:0.583,energy:0.769,acousticness:0.113,instrumentalness:0.0,liveness:0.105,speechiness:0.0425
    },
    {
        track_name:"Dancing In The Flames",popularity_new:80.0,danceability:0.552,valence:0.162,energy:0.73,acousticness:0.0011,instrumentalness:0.0,liveness:0.0837,speechiness:0.0381
    },
    {
        track_name:"Save Your Tears (Remix) (with Ariana Grande) - Bonus Track",popularity_new:80.0,danceability:0.65,valence:0.593,energy:0.825,acousticness:0.0215,instrumentalness:0.0000244,liveness:0.0936,speechiness:0.0325
    },
    {
        track_name:"Stargirl Interlude",popularity_new:80.0,danceability:0.715,valence:0.426,energy:0.47,acousticness:0.353,instrumentalness:0.0923,liveness:0.104,speechiness:0.0772
    },
    {
        track_name:"Enjoy The Show (feat. Future)",popularity_new:79.0,danceability:0.628,valence:0.241,energy:0.616,acousticness:0.178,instrumentalness:0.000047,liveness:0.331,speechiness:0.0526
    },
    {
        track_name:"Heartless",popularity_new:78.0,danceability:0.537,valence:0.252,energy:0.746,acousticness:0.0236,instrumentalness:0.00000101,liveness:0.156,speechiness:0.15
    },
    {
        track_name:"I Feel It Coming",popularity_new:78.0,danceability:0.773,valence:0.585,energy:0.819,acousticness:0.426,instrumentalness:0.0,liveness:0.0679,speechiness:0.118
    },
    {
        track_name:"I Can't Wait To Get There",popularity_new:77.0,danceability:0.65,valence:0.122,energy:0.436,acousticness:0.538,instrumentalness:0.00223,liveness:0.118,speechiness:0.048
    },
    {
        track_name:"Save Your Tears (with Ariana Grande) (Remix)",popularity_new:77.0,danceability:0.65,valence:0.593,energy:0.825,acousticness:0.0215,instrumentalness:0.0000244,liveness:0.0936,speechiness:0.0325
    },
    {
        track_name:"Die For You (with Ariana Grande) - Remix",popularity_new:76.0,danceability:0.575,valence:0.506,energy:0.5,acousticness:0.227,instrumentalness:0.0,liveness:0.335,speechiness:0.0707
    },
    {
        track_name:"Out of Time",popularity_new:75.0,danceability:0.65,valence:0.838,energy:0.76,acousticness:0.255,instrumentalness:0.0,liveness:0.339,speechiness:0.0446
    },
    {
        track_name:"In Your Eyes",popularity_new:75.0,danceability:0.667,valence:0.717,energy:0.719,acousticness:0.00285,instrumentalness:0.000081,liveness:0.0736,speechiness:0.0346
    },
    {
        track_name:"Earned It (Fifty Shades Of Grey)",popularity_new:73.0,danceability:0.659,valence:0.406,energy:0.291,acousticness:0.405,instrumentalness:0.0,liveness:0.0771,speechiness:0.0348
    },
    {
        track_name:"Baptized In Fear",popularity_new:73.0,danceability:0.564,valence:0.419,energy:0.513,acousticness:0.138,instrumentalness:0.0,liveness:0.379,speechiness:0.0325
    },
    {
        track_name:"The Abyss (feat. Lana Del Ray)",popularity_new:72.0,danceability:0.177,valence:0.0518,energy:0.422,acousticness:0.197,instrumentalness:0.00000334,liveness:0.178,speechiness:0.032
    },
    {
        track_name:"Less Than Zero",popularity_new:72.0,danceability:0.535,valence:0.5,energy:0.791,acousticness:0.00096,instrumentalness:0.000155,liveness:0.0788,speechiness:0.0327
    },
    {
        track_name:"Take My Breath",popularity_new:69.0,danceability:0.698,valence:0.354,energy:0.769,acousticness:0.0128,instrumentalness:0.00166,liveness:0.238,speechiness:0.0368
    },
    {
        track_name:"Open Hearts",popularity_new:66.0,danceability:0.658,valence:0.333,energy:0.753,acousticness:0.00301,instrumentalness:0.000469,liveness:0.204,speechiness:0.116
    },
    {
        track_name:"How Do I Make You Love Me?",popularity_new:64.0,danceability:0.805,valence:0.636,energy:0.498,acousticness:0.0203,instrumentalness:0.0000237,liveness:0.085,speechiness:0.0737
    },
    {
        track_name:"One Of The Girls (with JENNIE, Lily Rose Depp)",popularity_new:63.0,danceability:0.531,valence:0.179,energy:0.652,acousticness:0.0524,instrumentalness:0.00000139,liveness:0.162,speechiness:0.0325
    },
    {
        track_name:"Best Friends",popularity_new:62.0,danceability:0.737,valence:0.528,energy:0.564,acousticness:0.436,instrumentalness:0.0,liveness:0.351,speechiness:0.105
    },
    {
        track_name:"Wake Me Up (feat. Justice)",popularity_new:62.0,danceability:0.597,valence:0.153,energy:0.522,acousticness:0.00426,instrumentalness:0.00102,liveness:0.492,speechiness:0.034
    },
    {
        track_name:"Starry Eyes",popularity_new:62.0,danceability:0.309,valence:0.146,energy:0.418,acousticness:0.465,instrumentalness:0.0000758,liveness:0.295,speechiness:0.031
    },
    {
        track_name:"Give Me Mercy",popularity_new:61.0,danceability:0.642,valence:0.278,energy:0.674,acousticness:0.167,instrumentalness:0.0,liveness:0.128,speechiness:0.0489
    },
    {
        track_name:"Here We Go... Again (feat. Tyler, the Creator)",popularity_new:61.0,danceability:0.469,valence:0.198,energy:0.623,acousticness:0.345,instrumentalness:0.0,liveness:0.588,speechiness:0.0302
    },
    {
        track_name:"Don't Break My Heart",popularity_new:60.0,danceability:0.767,valence:0.243,energy:0.618,acousticness:0.31,instrumentalness:0.0,liveness:0.179,speechiness:0.032
    },
    {
        track_name:"Popular (with Playboi Carti & Madonna)",popularity_new:60.0,danceability:0.854,valence:0.833,energy:0.668,acousticness:0.0604,instrumentalness:0.0000839,liveness:0.382,speechiness:0.2
    },
    {
        track_name:"I Heard You're Married (feat. Lil Wayne)",popularity_new:59.0,danceability:0.736,valence:0.784,energy:0.848,acousticness:0.103,instrumentalness:0.0,liveness:0.299,speechiness:0.171
    },
    {
        track_name:"Take Me Back To LA",popularity_new:59.0,danceability:0.344,valence:0.199,energy:0.571,acousticness:0.0721,instrumentalness:0.0,liveness:0.093,speechiness:0.0461
    },
    {
        track_name:"Drive",popularity_new:57.0,danceability:0.574,valence:0.258,energy:0.536,acousticness:0.15,instrumentalness:0.0025,liveness:0.132,speechiness:0.0296
    },
    {
        track_name:"Given Up On Me",popularity_new:56.0,danceability:0.416,valence:0.0604,energy:0.386,acousticness:0.0715,instrumentalness:0.00512,liveness:0.132,speechiness:0.0541
    },
    {
        track_name:"Take My Breath - Single Version",popularity_new:55.0,danceability:0.747,valence:0.523,energy:0.739,acousticness:0.0106,instrumentalness:0.0000222,liveness:0.101,speechiness:0.0487
    },
    {
        track_name:"Without a Warning",popularity_new:54.0,danceability:0.332,valence:0.0462,energy:0.497,acousticness:0.133,instrumentalness:0.00000453,liveness:0.643,speechiness:0.0384
    },
    {
        track_name:"Hurry Up Tomorrow",popularity_new:54.0,danceability:0.449,valence:0.0499,energy:0.448,acousticness:0.337,instrumentalness:0.0000918,liveness:0.139,speechiness:0.035
    },
    {
        track_name:"Red Terror",popularity_new:54.0,danceability:0.293,valence:0.164,energy:0.31,acousticness:0.399,instrumentalness:0.0000428,liveness:0.571,speechiness:0.0347
    },
    {
        track_name:"A Tale By Quincy",popularity_new:54.0,danceability:0.447,valence:0.572,energy:0.513,acousticness:0.679,instrumentalness:0.0000298,liveness:0.096,speechiness:0.127
    },
    {
        track_name:"Every Angel is Terrifying",popularity_new:53.0,danceability:0.447,valence:0.46,energy:0.959,acousticness:0.109,instrumentalness:0.0000275,liveness:0.0498,speechiness:0.348
    },
    {
        track_name:"Opening Night",popularity_new:52.0,danceability:0.525,valence:0.549,energy:0.661,acousticness:0.035,instrumentalness:0.167,liveness:0.377,speechiness:0.0578
    },
    {
        track_name:"Phantom Regret by Jim",popularity_new:52.0,danceability:0.394,valence:0.241,energy:0.519,acousticness:0.75,instrumentalness:0.195,liveness:0.129,speechiness:0.0465
    },
    {
        track_name:"Big Sleep",popularity_new:50.0,danceability:0.246,valence:0.123,energy:0.353,acousticness:0.433,instrumentalness:0.00821,liveness:0.478,speechiness:0.0305}];