### Extract features from lyrics
- Contains segment-level and overall predictions.
- Used NLI model: "facebook/bart-large-mnli"
- Features:
    * Sentiment ("positive sentiment", "negative sentiment", "neutral sentiment")
    * Emotion ("emotion is joy", "emotion is anger", "emotion is sadness", "emotion is disgust", "emotion is fear", "emotion is optimism")
    * Topics ("song about love", "song about friendship", "song about mental health", "song about personal growth", "song about loss and grief", "song about social issues", "song about spirituality and faith", "song about happiness and celebration", "song about nature and the environment", "song about ambition and success")
- Files: ver2_w_lyrics_features.csv (overall predictions only), ver2_w_lyrics_features.p (contains also raw and segment-level)
