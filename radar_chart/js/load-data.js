const taylorSwiftSongs = [
    {
        track_name: "All"
    },
    {
        track_name: "Cruel Summer", popularity_new: 88, danceability: 0.552, valence: 0.564, energy: 0.702, acousticness: 0.117, instrumentalness: 0.0000206, liveness: 0.105, speechiness: 0.157
    },
    {
        track_name: "Lover", popularity_new: 84, danceability: 0.359, valence: 0.453, energy: 0.543, acousticness: 0.492, instrumentalness: 0.0000158, liveness: 0.118, speechiness: 0.0919
    },
    {
        track_name: "cardigan", popularity_new: 84, danceability: 0.613, valence: 0.551, energy: 0.581, acousticness: 0.537, instrumentalness: 0.000345, liveness: 0.25, speechiness: 0.0424
    },
    {
        track_name: "Fortnight", popularity_new: 83, danceability: 0.504, valence: 0.281, energy: 0.386, acousticness: 0.502, instrumentalness: 0.0000153, liveness: 0.0961, speechiness: 0.0308
    },
    {
        track_name: "Don't Blame Me", popularity_new: 83, danceability: 0.615, valence: 0.193, energy: 0.534, acousticness: 0.106, instrumentalness: 0.0000176, liveness: 0.0607, speechiness: 0.0386
    },
    {
        track_name: "I Can Do It With a Broken Heart", popularity_new: 81, danceability: 0.701, valence: 0.22, energy: 0.751, acousticness: 0.123, instrumentalness: 0.0, liveness: 0.15, speechiness: 0.0502
    },
    {
        track_name: "You Belong With Me", popularity_new: 80, danceability: 0.632, valence: 0.474, energy: 0.773, acousticness: 0.0623, instrumentalness: 0.0, liveness: 0.0885, speechiness: 0.0346
    },
    {
        track_name: "Delicate", popularity_new: 79, danceability: 0.75, valence: 0.0499, energy: 0.404, acousticness: 0.216, instrumentalness: 0.000357, liveness: 0.0911, speechiness: 0.0682
    },
    {
        track_name: "my tears ricochet", popularity_new: 79, danceability: 0.456, valence: 0.111, energy: 0.263, acousticness: 0.806, instrumentalness: 0.0, liveness: 0.0749, speechiness: 0.0332
    },
    {
        track_name: "All Too Well", popularity_new: 79, danceability: 0.631, valence: 0.205, energy: 0.518, acousticness: 0.274, instrumentalness: 0.0, liveness: 0.088, speechiness: 0.0303
    },
    {
        track_name: "Look What You Made Me Do", popularity_new: 79, danceability: 0.766, valence: 0.506, energy: 0.709, acousticness: 0.204, instrumentalness: 0.0000141, liveness: 0.126, speechiness: 0.123
    },
    {
        track_name: "...Ready For It?", popularity_new: 78, danceability: 0.613, valence: 0.417, energy: 0.764, acousticness: 0.0527, instrumentalness: 0.0, liveness: 0.197, speechiness: 0.136
    },
    {
        track_name: "The Man", popularity_new: 78, danceability: 0.777, valence: 0.633, energy: 0.658, acousticness: 0.0767, instrumentalness: 0.0, liveness: 0.0901, speechiness: 0.054
    },
    {
        track_name: "You Need To Calm Down", popularity_new: 77, danceability: 0.771, valence: 0.714, energy: 0.671, acousticness: 0.00929, instrumentalness: 0.0, liveness: 0.0637, speechiness: 0.0553
    },
    {
        track_name: "Love Story", popularity_new: 77, danceability: 0.626, valence: 0.416, energy: 0.79, acousticness: 0.135, instrumentalness: 0.00000397, liveness: 0.0989, speechiness: 0.0311
    },
    {
        track_name: "Enchanted", popularity_new: 77, danceability: 0.505, valence: 0.216, energy: 0.532, acousticness: 0.012, instrumentalness: 0.0, liveness: 0.149, speechiness: 0.0265
    },
    {
        track_name: "Style", popularity_new: 76, danceability: 0.575, valence: 0.292, energy: 0.824, acousticness: 0.000418, instrumentalness: 0.0214, liveness: 0.0901, speechiness: 0.038
    },
    {
        track_name: "The Prophecy", popularity_new: 76, danceability: 0.421, valence: 0.535, energy: 0.525, acousticness: 0.825, instrumentalness: 0.00000267, liveness: 0.308, speechiness: 0.0472
    },
    {
        track_name: "Blank Space", popularity_new: 76, danceability: 0.737, valence: 0.755, energy: 0.725, acousticness: 0.0976, instrumentalness: 0.0, liveness: 0.174, speechiness: 0.0641
    },
    {
        track_name: "Miss Americana & The Heartbreak Prince", popularity_new: 75, danceability: 0.662, valence: 0.487, energy: 0.747, acousticness: 0.028, instrumentalness: 0.00615, liveness: 0.138, speechiness: 0.0736
    },
    {
        track_name: "\"Slut!\"", popularity_new: 75, danceability: 0.629, valence: 0.306, energy: 0.413, acousticness: 0.345, instrumentalness: 0.0000762, liveness: 0.0603, speechiness: 0.055
    },
    {
        track_name: "The Way I Loved You", popularity_new: 75, danceability: 0.402, valence: 0.472, energy: 0.732, acousticness: 0.0033, instrumentalness: 0.0, liveness: 0.108, speechiness: 0.0484
    },
    {
        track_name: "Fearless", popularity_new: 75, danceability: 0.569, valence: 0.43, energy: 0.741, acousticness: 0.0122, instrumentalness: 0.0, liveness: 0.333, speechiness: 0.0282
    },
    {
        track_name: "The Archer", popularity_new: 75, danceability: 0.292, valence: 0.166, energy: 0.574, acousticness: 0.12, instrumentalness: 0.00569, liveness: 0.0663, speechiness: 0.0401
    },
    {
        track_name: "the 1", popularity_new: 74, danceability: 0.777, valence: 0.172, energy: 0.357, acousticness: 0.757, instrumentalness: 0.00000728, liveness: 0.108, speechiness: 0.0522
    },
    {
        track_name: "Down Bad", popularity_new: 74, danceability: 0.541, valence: 0.168, energy: 0.366, acousticness: 0.56, instrumentalness: 0.000001, liveness: 0.0946, speechiness: 0.0748
    },
    {
        track_name: "imgonnagetyouback", popularity_new: 74, danceability: 0.784, valence: 0.15, energy: 0.391, acousticness: 0.608, instrumentalness: 0.0, liveness: 0.252, speechiness: 0.0633
    },
    {
        track_name: "champagne problems", popularity_new: 74, danceability: 0.462, valence: 0.32, energy: 0.24, acousticness: 0.92, instrumentalness: 0.0, liveness: 0.113, speechiness: 0.0377
    },
    {
        track_name: "Midnight Rain", popularity_new: 74, danceability: 0.643, valence: 0.23, energy: 0.363, acousticness: 0.69, instrumentalness: 0.0000517, liveness: 0.115, speechiness: 0.0767
    },
    {
        track_name: "Wildest Dreams", popularity_new: 74, danceability: 0.581, valence: 0.514, energy: 0.672, acousticness: 0.0411, instrumentalness: 0.0000935, liveness: 0.118, speechiness: 0.0739
    },
    {
        track_name: "We Are Never Ever Getting Back Together", popularity_new: 73, danceability: 0.567, valence: 0.716, energy: 0.686, acousticness: 0.0317, instrumentalness: 0.00000186, liveness: 0.0732, speechiness: 0.175
    },
    {
        track_name: "Who's Afraid of Little Old Me?", popularity_new: 73, danceability: 0.606, valence: 0.238, energy: 0.338, acousticness: 0.315, instrumentalness: 0.0, liveness: 0.106, speechiness: 0.048
    },
    {
        track_name: "The Black Dog", popularity_new: 73, danceability: 0.527, valence: 0.23, energy: 0.27, acousticness: 0.707, instrumentalness: 0.0, liveness: 0.102, speechiness: 0.038
    },
    {
        track_name: "The Bolter", popularity_new: 72, danceability: 0.447, valence: 0.569, energy: 0.588, acousticness: 0.6, instrumentalness: 0.0, liveness: 0.134, speechiness: 0.0557
    },
    {
        track_name: "Shake It Off", popularity_new: 72, danceability: 0.632, valence: 0.921, energy: 0.807, acousticness: 0.0103, instrumentalness: 0.0000127, liveness: 0.29, speechiness: 0.0738
    },
    {
        track_name: "New Romantics", popularity_new: 72, danceability: 0.651, valence: 0.698, energy: 0.855, acousticness: 0.0068, instrumentalness: 0.00000981, liveness: 0.0759, speechiness: 0.0538
    },
    {
        track_name: "I Hate It Here", popularity_new: 72, danceability: 0.378, valence: 0.267, energy: 0.564, acousticness: 0.763, instrumentalness: 0.0, liveness: 0.359, speechiness: 0.0355
    },
    {
        track_name: "I Knew You Were Trouble", popularity_new: 72, danceability: 0.584, valence: 0.767, energy: 0.557, acousticness: 0.0129, instrumentalness: 0.0, liveness: 0.0576, speechiness: 0.0342
    },
    {
        track_name: "So High School", popularity_new: 71, danceability: 0.362, valence: 0.348, energy: 0.861, acousticness: 0.0333, instrumentalness: 0.00000215, liveness: 0.103, speechiness: 0.0486
    },
    {
        track_name: "Out Of The Woods", popularity_new: 71, danceability: 0.547, valence: 0.192, energy: 0.885, acousticness: 0.000512, instrumentalness: 0.0000937, liveness: 0.39, speechiness: 0.0418
    },
    {
        track_name: "Long Live", popularity_new: 71, danceability: 0.375, valence: 0.0752, energy: 0.65, acousticness: 0.0122, instrumentalness: 0.0, liveness: 0.189, speechiness: 0.0402
    },
    {
        track_name: "tolerate it", popularity_new: 71, danceability: 0.316, valence: 0.221, energy: 0.361, acousticness: 0.878, instrumentalness: 0.0000267, liveness: 0.0797, speechiness: 0.0488
    },
    {
        track_name: "But Daddy I Love Him", popularity_new: 71, danceability: 0.521, valence: 0.438, energy: 0.72, acousticness: 0.384, instrumentalness: 0.0, liveness: 0.135, speechiness: 0.104
    },
    {
        track_name: "Florida!!!", popularity_new: 70, danceability: 0.533, valence: 0.398, energy: 0.573, acousticness: 0.178, instrumentalness: 0.0, liveness: 0.309, speechiness: 0.138
    },
    {
        track_name: "The Albatross", popularity_new: 69, danceability: 0.479, valence: 0.308, energy: 0.48, acousticness: 0.68, instrumentalness: 0.0, liveness: 0.0949, speechiness: 0.0426
    },
    {
        track_name: "You Are In Love", popularity_new: 69, danceability: 0.537, valence: 0.492, energy: 0.495, acousticness: 0.609, instrumentalness: 0.00000249, liveness: 0.112, speechiness: 0.0573
    },
    {
        track_name: "The Smallest Man Who Ever Lived", popularity_new: 69, danceability: 0.426, valence: 0.263, energy: 0.41, acousticness: 0.52, instrumentalness: 0.0, liveness: 0.338, speechiness: 0.0581
    },
    {
        track_name: "I Look in People's Windows", popularity_new: 69, danceability: 0.762, valence: 0.382, energy: 0.268, acousticness: 0.692, instrumentalness: 0.0, liveness: 0.154, speechiness: 0.0648
    },
    {
        track_name: "Everything Has Changed", popularity_new: 69, danceability: 0.498, valence: 0.474, energy: 0.61, acousticness: 0.271, instrumentalness: 0.0, liveness: 0.223, speechiness: 0.0363
    },
    {
        track_name: "New Year's Day", popularity_new: 69, danceability: 0.661, valence: 0.23, energy: 0.151, acousticness: 0.921, instrumentalness: 0.0, liveness: 0.13, speechiness: 0.0354
    },
    {
        track_name: "White Horse", popularity_new: 68, danceability: 0.423, valence: 0.366, energy: 0.517, acousticness: 0.369, instrumentalness: 0.0, liveness: 0.177, speechiness: 0.0486
    },
    {
        track_name: "The Alchemy", popularity_new: 68, danceability: 0.64, valence: 0.353, energy: 0.421, acousticness: 0.422, instrumentalness: 0.0, liveness: 0.103, speechiness: 0.0273
    },
    {
        track_name: "Begin Again", popularity_new: 68, danceability: 0.519, valence: 0.267, energy: 0.527, acousticness: 0.075, instrumentalness: 0.0, liveness: 0.132, speechiness: 0.0274
    },
    {
        track_name: "willow", popularity_new: 68, danceability: 0.392, valence: 0.549, energy: 0.579, acousticness: 0.835, instrumentalness: 0.00179, liveness: 0.145, speechiness: 0.164
    },
    {
        track_name: "The Tortured Poets Department", popularity_new: 68, danceability: 0.604, valence: 0.292, energy: 0.428, acousticness: 0.0483, instrumentalness: 0.0, liveness: 0.126, speechiness: 0.0255
    },
    {
        track_name: "Welcome To New York", popularity_new: 68, danceability: 0.761, valence: 0.674, energy: 0.607, acousticness: 0.00961, instrumentalness: 0.0000224, liveness: 0.367, speechiness: 0.0312
    },
    {
        track_name: "thanK you aIMee", popularity_new: 68, danceability: 0.619, valence: 0.287, energy: 0.533, acousticness: 0.613, instrumentalness: 0.0, liveness: 0.125, speechiness: 0.0337
    },
    {
        track_name: "The Manuscript", popularity_new: 68, danceability: 0.493, valence: 0.437, energy: 0.259, acousticness: 0.897, instrumentalness: 0.00000355, liveness: 0.119, speechiness: 0.0275
    },
    {
        track_name: "Clean", popularity_new: 68, danceability: 0.771, valence: 0.239, energy: 0.386, acousticness: 0.276, instrumentalness: 0.0000201, liveness: 0.121, speechiness: 0.0297
    },
    {
        track_name: "All You Had To Do Was Stay", popularity_new: 67, danceability: 0.586, valence: 0.481, energy: 0.72, acousticness: 0.000718, instrumentalness: 0.0, liveness: 0.0949, speechiness: 0.035
    },
    {
        track_name: "Bad Blood", popularity_new: 67, danceability: 0.619, valence: 0.364, energy: 0.686, acousticness: 0.0385, instrumentalness: 0.0, liveness: 0.307, speechiness: 0.164
    },
    {
        track_name: "The Last Time", popularity_new: 67, danceability: 0.502, valence: 0.155, energy: 0.534, acousticness: 0.0399, instrumentalness: 0.0, liveness: 0.0977, speechiness: 0.0278
    },
    {
        track_name: "Fresh Out The Slammer", popularity_new: 65, danceability: 0.33, valence: 0.34, energy: 0.483, acousticness: 0.624, instrumentalness: 0.0, liveness: 0.111, speechiness: 0.0399
    },
    {
        track_name: "I Wish You Would", popularity_new: 65, danceability: 0.669, valence: 0.541, energy: 0.851, acousticness: 0.00357, instrumentalness: 0.0000104, liveness: 0.0676, speechiness: 0.0432
    },
    {
        track_name: "How You Get The Girl", popularity_new: 65, danceability: 0.754, valence: 0.547, energy: 0.682, acousticness: 0.00209, instrumentalness: 0.00000988, liveness: 0.0941, speechiness: 0.0565
    },
    {
        track_name: "This Love", popularity_new: 65, danceability: 0.47, valence: 0.0524, energy: 0.494, acousticness: 0.302, instrumentalness: 0.0, liveness: 0.0672, speechiness: 0.0349
    },
    {
        track_name: "Wonderland", popularity_new: 65, danceability: 0.462, valence: 0.337, energy: 0.708, acousticness: 0.00933, instrumentalness: 0.0000188, liveness: 0.198, speechiness: 0.0555
    },
    {
        track_name: "Sad Beautiful Tragic", popularity_new: 64, danceability: 0.601, valence: 0.232, energy: 0.406, acousticness: 0.622, instrumentalness: 0.0000919, liveness: 0.133, speechiness: 0.0275
    },
    {
        track_name: "I Know Places", popularity_new: 64, danceability: 0.575, valence: 0.68, energy: 0.803, acousticness: 0.087, instrumentalness: 0.0, liveness: 0.0971, speechiness: 0.0465
    },
    {
        track_name: "Treacherous", popularity_new: 64, danceability: 0.645, valence: 0.299, energy: 0.593, acousticness: 0.0344, instrumentalness: 0.000127, liveness: 0.13, speechiness: 0.0288
    },
    {
        track_name: "I Almost Do", popularity_new: 64, danceability: 0.511, valence: 0.248, energy: 0.559, acousticness: 0.0167, instrumentalness: 0.0, liveness: 0.113, speechiness: 0.0264
    },
    {
        track_name: "So Long, London", popularity_new: 63, danceability: 0.488, valence: 0.301, energy: 0.545, acousticness: 0.73, instrumentalness: 0.0046, liveness: 0.0832, speechiness: 0.317
    },
    {
        track_name: "Holy Ground", popularity_new: 63, danceability: 0.622, valence: 0.511, energy: 0.809, acousticness: 0.0288, instrumentalness: 0.00218, liveness: 0.109, speechiness: 0.0638
    },
    {
        track_name: "The Other Side Of The Door", popularity_new: 62, danceability: 0.432, valence: 0.629, energy: 0.873, acousticness: 0.0279, instrumentalness: 0.0, liveness: 0.167, speechiness: 0.0577
    },
    {
        track_name: "Forever Winter", popularity_new: 62, danceability: 0.611, valence: 0.41, energy: 0.552, acousticness: 0.256, instrumentalness: 0.0, liveness: 0.134, speechiness: 0.031
    },
    {
        track_name: "The Moment I Knew", popularity_new: 62, danceability: 0.636, valence: 0.208, energy: 0.402, acousticness: 0.0494, instrumentalness: 0.0, liveness: 0.107, speechiness: 0.031
    },
    {
        track_name: "The Lucky One", popularity_new: 62, danceability: 0.686, valence: 0.538, energy: 0.571, acousticness: 0.066, instrumentalness: 0.0, liveness: 0.0608, speechiness: 0.05
    },
    {
        track_name: "Stay Stay Stay", popularity_new: 62, danceability: 0.693, valence: 0.663, energy: 0.681, acousticness: 0.0848, instrumentalness: 0.0, liveness: 0.0768, speechiness: 0.025
    },
    {
        track_name: "Christmas Tree Farm", popularity_new: 62, danceability: 0.598, valence: 0.437, energy: 0.68, acousticness: 0.06, instrumentalness: 0.0, liveness: 0.324, speechiness: 0.0331
    },
    {
        track_name: "Untouchable", popularity_new: 62, danceability: 0.393, valence: 0.224, energy: 0.531, acousticness: 0.0181, instrumentalness: 0.0, liveness: 0.169, speechiness: 0.0329
    },
    {
        track_name: "You're Not Sorry", popularity_new: 62, danceability: 0.506, valence: 0.241, energy: 0.444, acousticness: 0.0538, instrumentalness: 0.0, liveness: 0.123, speechiness: 0.0285
    },
    {
        track_name: "Jump Then Fall", popularity_new: 61, danceability: 0.572, valence: 0.624, energy: 0.69, acousticness: 0.0474, instrumentalness: 0.0, liveness: 0.0897, speechiness: 0.0358
    },
    {
        track_name: "Starlight", popularity_new: 61, danceability: 0.628, valence: 0.605, energy: 0.685, acousticness: 0.00324, instrumentalness: 0.0, liveness: 0.18, speechiness: 0.0358
    },
    {
        track_name: "Girl At Home", popularity_new: 60, danceability: 0.691, valence: 0.612, energy: 0.736, acousticness: 0.00955, instrumentalness: 0.0000188, liveness: 0.101, speechiness: 0.0326
    },
    {
        track_name: "Clara Bow", popularity_new: 60, danceability: 0.686, valence: 0.214, energy: 0.318, acousticness: 0.636, instrumentalness: 0.00144, liveness: 0.106, speechiness: 0.0263
    },
    {
        track_name: "Today Was A Fairytale", popularity_new: 60, danceability: 0.482, valence: 0.328, energy: 0.779, acousticness: 0.0135, instrumentalness: 0.0, liveness: 0.296, speechiness: 0.0409
    },
    {
        track_name: "The Best Day", popularity_new: 60, danceability: 0.642, valence: 0.469, energy: 0.576, acousticness: 0.488, instrumentalness: 0.0, liveness: 0.159, speechiness: 0.0282
    },
    {
        track_name: "Tell Me Why", popularity_new: 60, danceability: 0.578, valence: 0.541, energy: 0.909, acousticness: 0.0222, instrumentalness: 0.0, liveness: 0.333, speechiness: 0.0628
    },
    {
        track_name: "Forever & Always", popularity_new: 60, danceability: 0.546, valence: 0.271, energy: 0.273, acousticness: 0.819, instrumentalness: 0.0, liveness: 0.137, speechiness: 0.0308
    },
    {
        track_name: "Come In With The Rain", popularity_new: 58, danceability: 0.476, valence: 0.167, energy: 0.564, acousticness: 0.0406, instrumentalness: 0.0, liveness: 0.102, speechiness: 0.0269
    },
    {
        track_name: "My Boy Only Breaks His Favorite Toys", popularity_new: 57, danceability: 0.593, valence: 0.436, energy: 0.582, acousticness: 0.165, instrumentalness: 0.0, liveness: 0.31, speechiness: 0.0285
    },
    {
        track_name: "'tis the damn season", popularity_new: 51, danceability: 0.575, valence: 0.351, energy: 0.435, acousticness: 0.737, instrumentalness: 0.0000538, liveness: 0.105, speechiness: 0.0311
    },
    {
        track_name: "How Did It End?", popularity_new: 49, danceability: 0.434, valence: 0.245, energy: 0.387, acousticness: 0.808, instrumentalness: 0.0011, liveness: 0.109, speechiness: 0.0273
    },
    {
        track_name: "Chloe or Sam or Sophia or Marcus", popularity_new: 47, danceability: 0.459, valence: 0.265, energy: 0.454, acousticness: 0.784, instrumentalness: 0.0, liveness: 0.105, speechiness: 0.05
    }
];

const drakeSongs = [
    {
        track_name: "All"
    },
    {
        track_name: "One Dance", popularity_new: 86.0, danceability: 0.792, valence: 0.37, energy: 0.625, acousticness: 0.00776, instrumentalness: 0.0018, liveness: 0.329, speechiness: 0.0536
    },
    {
        track_name: "Jimmy Cooks (feat. 21 Savage)", popularity_new: 80.0, danceability: 0.529, valence: 0.366, energy: 0.673, acousticness: 0.000307, instrumentalness: 0.00000241, liveness: 0.093, speechiness: 0.175
    },
    {
        track_name: "Fair Trade (with Travis Scott)", popularity_new: 79.0, danceability: 0.666, valence: 0.292, energy: 0.465, acousticness: 0.0503, instrumentalness: 0.0, liveness: 0.215, speechiness: 0.26

    },
    {
        track_name: "Rich Baby Daddy (feat. Sexyy Red & SZA)", popularity_new: 79.0, danceability: 0.645, valence: 0.142, energy: 0.729, acousticness: 0.0377, instrumentalness: 0.0, liveness: 0.384, speechiness: 0.0528
    },
    {
        track_name: "Circadian Rhythm", popularity_new: 78.0, danceability: 0.694, valence: 0.286, energy: 0.574, acousticness: 0.193, instrumentalness: 0.0, liveness: 0.082, speechiness: 0.0483
    },
    {
        track_name: "SMALL TOWN FAME", popularity_new: 78.0, danceability: 0.842, valence: 0.354, energy: 0.524, acousticness: 0.443, instrumentalness: 0.00000974, liveness: 0.303, speechiness: 0.305
    },
    {
        track_name: "Chicago Freestyle (feat. Giveon)", popularity_new: 77.0, danceability: 0.735, valence: 0.0397, energy: 0.449, acousticness: 0.629, instrumentalness: 0.0, liveness: 0.113, speechiness: 0.347
    },
    {
        track_name: "RAINING IN HOUSTON", popularity_new: 77.0, danceability: 0.465, valence: 0.439, energy: 0.534, acousticness: 0.788, instrumentalness: 0.0, liveness: 0.0992, speechiness: 0.0546
    },
    {
        track_name: "Practice", popularity_new: 77.0, danceability: 0.446, valence: 0.31, energy: 0.239, acousticness: 0.574, instrumentalness: 0.0000776, liveness: 0.12, speechiness: 0.0876
    },
    {
        track_name: "Yebba's Heartbreak", popularity_new: 77.0, danceability: 0.476, valence: 0.0908, energy: 0.161, acousticness: 0.967, instrumentalness: 0.0381, liveness: 0.109, speechiness: 0.0407
    },
    {
        track_name: "No Face", popularity_new: 77.0, danceability: 0.853, valence: 0.471, energy: 0.69, acousticness: 0.0771, instrumentalness: 0.0, liveness: 0.0835, speechiness: 0.0647
    },
    {
        track_name: "IDGAF (feat. Yeat)", popularity_new: 76.0, danceability: 0.663, valence: 0.138, energy: 0.67, acousticness: 0.0464, instrumentalness: 0.0000892, liveness: 0.205, speechiness: 0.271
    },
    {
        track_name: "Girls Want Girls (with Lil Baby)", popularity_new: 76.0, danceability: 0.767, valence: 0.381, energy: 0.438, acousticness: 0.181, instrumentalness: 0.0, liveness: 0.142, speechiness: 0.29
    },
    {
        track_name: "First Person Shooter (feat. J. Cole)", popularity_new: 75.0, danceability: 0.47, valence: 0.248, energy: 0.64, acousticness: 0.0277, instrumentalness: 0.0, liveness: 0.382, speechiness: 0.32
    },
    {
        track_name: "Laugh Now Cry Later (feat. Lil Durk)", popularity_new: 75.0, danceability: 0.761, valence: 0.522, energy: 0.518, acousticness: 0.244, instrumentalness: 0.0000347, liveness: 0.107, speechiness: 0.134
    },
    {
        track_name: "Wants and Needs (feat. Lil Baby)", popularity_new: 75.0, danceability: 0.578, valence: 0.1, energy: 0.449, acousticness: 0.0618, instrumentalness: 0.00000217, liveness: 0.119, speechiness: 0.286
    },
    {
        track_name: "Knife Talk (with 21 Savage ft. Project Pat)", popularity_new: 75.0, danceability: 0.849, valence: 0.153, energy: 0.424, acousticness: 0.0635, instrumentalness: 0.0, liveness: 0.0834, speechiness: 0.324
    },
    {
        track_name: "Money In The Grave (Drake ft. Rick Ross)", popularity_new: 74.0, danceability: 0.831, valence: 0.101, energy: 0.502, acousticness: 0.101, instrumentalness: 0.0, liveness: 0.122, speechiness: 0.046
    },
    {
        track_name: "You Broke My Heart", popularity_new: 74.0, danceability: 0.465, valence: 0.276, energy: 0.7, acousticness: 0.203, instrumentalness: 0.0, liveness: 0.299, speechiness: 0.0893
    },
    {
        track_name: "Family Matters", popularity_new: 73.0, danceability: 0.527, valence: 0.234, energy: 0.492, acousticness: 0.0047, instrumentalness: 0.0, liveness: 0.306, speechiness: 0.279
    },
    {
        track_name: "Push Ups", popularity_new: 73.0, danceability: 0.598, valence: 0.209, energy: 0.696, acousticness: 0.0153, instrumentalness: 0.0, liveness: 0.219, speechiness: 0.112
    },
    {
        track_name: "Way 2 Sexy (with Future & Young Thug)", popularity_new: 73.0, danceability: 0.803, valence: 0.331, energy: 0.597, acousticness: 0.000619, instrumentalness: 0.0000045, liveness: 0.323, speechiness: 0.141
    },
    {
        track_name: "It's Up (feat. Young Thug & 21 Savage)", popularity_new: 73.0, danceability: 0.783, valence: 0.294, energy: 0.723, acousticness: 0.0264, instrumentalness: 0.0, liveness: 0.159, speechiness: 0.135
    },
    {
        track_name: "Pipe Down", popularity_new: 72.0, danceability: 0.518, valence: 0.59, energy: 0.69, acousticness: 0.128, instrumentalness: 0.0, liveness: 0.176, speechiness: 0.107
    },
    {
        track_name: "Virginia Beach", popularity_new: 72.0, danceability: 0.402, valence: 0.2, energy: 0.514, acousticness: 0.106, instrumentalness: 0.0, liveness: 0.181, speechiness: 0.0471
    },
    {
        track_name: "Champagne Poetry", popularity_new: 71.0, danceability: 0.423, valence: 0.496, energy: 0.667, acousticness: 0.758, instrumentalness: 0.0, liveness: 0.246, speechiness: 0.326
    },
    {
        track_name: "Sticky", popularity_new: 69.0, danceability: 0.853, valence: 0.0774, energy: 0.495, acousticness: 0.0917, instrumentalness: 0.000217, liveness: 0.0844, speechiness: 0.14
    },
    {
        track_name: "Fountains (with Tems)", popularity_new: 69.0, danceability: 0.843, valence: 0.689, energy: 0.485, acousticness: 0.181, instrumentalness: 0.0675, liveness: 0.107, speechiness: 0.195
    },
    {
        track_name: "Get Along Better", popularity_new: 69.0, danceability: 0.32, valence: 0.338, energy: 0.466, acousticness: 0.00645, instrumentalness: 0.0, liveness: 0.133, speechiness: 0.0374
    },
    {
        track_name: "Love All (with JAY-Z)", popularity_new: 68.0, danceability: 0.73, valence: 0.155, energy: 0.576, acousticness: 0.354, instrumentalness: 0.0000359, liveness: 0.15, speechiness: 0.287
    },
    {
        track_name: "No Friends In The Industry", popularity_new: 68.0, danceability: 0.84, valence: 0.171, energy: 0.744, acousticness: 0.0181, instrumentalness: 0.0, liveness: 0.629, speechiness: 0.113
    },
    {
        track_name: "Slime You Out (feat. SZA)", popularity_new: 67.0, danceability: 0.483, valence: 0.105, energy: 0.408, acousticness: 0.508, instrumentalness: 0.0, liveness: 0.259, speechiness: 0.0502
    },
    {
        track_name: "Toosie Slide", popularity_new: 67.0, danceability: 0.83, valence: 0.845, energy: 0.49, acousticness: 0.289, instrumentalness: 0.00000304, liveness: 0.113, speechiness: 0.209
    },
    {
        track_name: "Race My Mind", popularity_new: 66.0, danceability: 0.488, valence: 0.783, energy: 0.635, acousticness: 0.179, instrumentalness: 0.00000816, liveness: 0.156, speechiness: 0.26
    },
    {
        track_name: "N 2 Deep", popularity_new: 66.0, danceability: 0.507, valence: 0.0744, energy: 0.429, acousticness: 0.0518, instrumentalness: 0.0, liveness: 0.109, speechiness: 0.326
    },
    {
        track_name: "What's Next", popularity_new: 66.0, danceability: 0.781, valence: 0.0628, energy: 0.594, acousticness: 0.0136, instrumentalness: 0.0, liveness: 0.162, speechiness: 0.0485
    },
    {
        track_name: "Massive", popularity_new: 65.0, danceability: 0.499, valence: 0.0557, energy: 0.671, acousticness: 0.114, instrumentalness: 0.0169, liveness: 0.148, speechiness: 0.0561
    },
    {
        track_name: "A Keeper", popularity_new: 64.0, danceability: 0.6, valence: 0.323, energy: 0.482, acousticness: 0.512, instrumentalness: 0.000104, liveness: 0.115, speechiness: 0.0701
    },
    {
        track_name: "Lemon Pepper Freestyle (feat. Rick Ross)", popularity_new: 64.0, danceability: 0.77, valence: 0.431, energy: 0.637, acousticness: 0.103, instrumentalness: 0.0, liveness: 0.171, speechiness: 0.345
    },
    {
        track_name: "In The Bible (with Lil Durk & Giveon)", popularity_new: 64.0, danceability: 0.686, valence: 0.147, energy: 0.385, acousticness: 0.614, instrumentalness: 0.0, liveness: 0.131, speechiness: 0.297
    },
    {
        track_name: "Flight's Booked", popularity_new: 63.0, danceability: 0.593, valence: 0.201, energy: 0.41, acousticness: 0.886, instrumentalness: 0.0993, liveness: 0.115, speechiness: 0.0531
    },
    {
        track_name: "IMY2 (with Kid Cudi)", popularity_new: 63.0, danceability: 0.59, valence: 0.0498, energy: 0.493, acousticness: 0.402, instrumentalness: 0.00504, liveness: 0.129, speechiness: 0.0367
    },
    {
        track_name: "Papi's Home", popularity_new: 62.0, danceability: 0.701, valence: 0.588, energy: 0.741, acousticness: 0.112, instrumentalness: 0.0, liveness: 0.699, speechiness: 0.313
    },
    {
        track_name: "Stories About My Brother", popularity_new: 62.0, danceability: 0.65, valence: 0.846, energy: 0.839, acousticness: 0.572, instrumentalness: 0.0000712, liveness: 0.219, speechiness: 0.18
    },
    {
        track_name: "F*****g Fans", popularity_new: 62.0, danceability: 0.783, valence: 0.165, energy: 0.416, acousticness: 0.213, instrumentalness: 0.0, liveness: 0.103, speechiness: 0.135
    },
    {
        track_name: "You Only Live Twice (with Lil Wayne & Rick Ross)", popularity_new: 61.0, danceability: 0.519, valence: 0.711, energy: 0.851, acousticness: 0.118, instrumentalness: 0.0, liveness: 0.178, speechiness: 0.29
    },
    {
        track_name: "Daylight", popularity_new: 61.0, danceability: 0.566, valence: 0.0667, energy: 0.564, acousticness: 0.0149, instrumentalness: 0.0, liveness: 0.104, speechiness: 0.277
    },
    {
        track_name: "Calling For You (feat. 21 Savage)", popularity_new: 61.0, danceability: 0.571, valence: 0.104, energy: 0.55, acousticness: 0.0548, instrumentalness: 0.0, liveness: 0.179, speechiness: 0.106
    },
    {
        track_name: "Evil Ways (feat. J. Cole)", popularity_new: 59.0, danceability: 0.56, valence: 0.25, energy: 0.784, acousticness: 0.0508, instrumentalness: 0.0, liveness: 0.221, speechiness: 0.301
    },
    {
        track_name: "7am On Bridle Path", popularity_new: 59.0, danceability: 0.724, valence: 0.141, energy: 0.531, acousticness: 0.225, instrumentalness: 0.0, liveness: 0.11, speechiness: 0.298
    },
    {
        track_name: "Red Button", popularity_new: 58.0, danceability: 0.455, valence: 0.393, energy: 0.707, acousticness: 0.155, instrumentalness: 0.0, liveness: 0.132, speechiness: 0.179
    },
    {
        track_name: "Liability", popularity_new: 58.0, danceability: 0.557, valence: 0.582, energy: 0.706, acousticness: 0.268, instrumentalness: 0.0, liveness: 0.132, speechiness: 0.0649
    },
    {
        track_name: "Calling My Name", popularity_new: 58.0, danceability: 0.826, valence: 0.484, energy: 0.276, acousticness: 0.62, instrumentalness: 0.0000853, liveness: 0.118, speechiness: 0.266
    },
    {
        track_name: "The Shoe Fits", popularity_new: 57.0, danceability: 0.354, valence: 0.652, energy: 0.79, acousticness: 0.291, instrumentalness: 0.0, liveness: 0.309, speechiness: 0.329
    },
    {
        track_name: "The Remorse", popularity_new: 56.0, danceability: 0.473, valence: 0.637, energy: 0.53, acousticness: 0.812, instrumentalness: 0.00000692, liveness: 0.227, speechiness: 0.249
    },
    {
        track_name: "Texts Go Green", popularity_new: 51.0, danceability: 0.765, valence: 0.536, energy: 0.627, acousticness: 0.000916, instrumentalness: 0.195, liveness: 0.0847, speechiness: 0.0622
    },
    {
        track_name: "Falling Back", popularity_new: 50.0, danceability: 0.718, valence: 0.349, energy: 0.758, acousticness: 0.238, instrumentalness: 0.00653, liveness: 0.11, speechiness: 0.0703
    },
    {
        track_name: "Currents", popularity_new: 48.0, danceability: 0.883, valence: 0.416, energy: 0.283, acousticness: 0.104, instrumentalness: 0.00167, liveness: 0.0935, speechiness: 0.113
    },
    {
        track_name: "Overdrive", popularity_new: 46.0, danceability: 0.502, valence: 0.518, energy: 0.645, acousticness: 0.444, instrumentalness: 0.00964, liveness: 0.107, speechiness: 0.122
    },
    {
        track_name: "Tie That Binds", popularity_new: 43.0, danceability: 0.775, valence: 0.284, energy: 0.688, acousticness: 0.0176, instrumentalness: 0.0917, liveness: 0.108, speechiness: 0.0593
    },
    {
        track_name: "Down Hill", popularity_new: 39.0, danceability: 0.718, valence: 0.639, energy: 0.319, acousticness: 0.965, instrumentalness: 0.00036, liveness: 0.0895, speechiness: 0.0435
    },
    {
        track_name: "Blue Green Red", popularity_new: 12.0, danceability: 0.762, valence: 0.83, energy: 0.678, acousticness: 0.375, instrumentalness: 0.0013, liveness: 0.111, speechiness: 0.0863
    }];

const weekndSongs = [
    { track_name: "All" },
    {
        track_name: "Cry For Me", popularity_new: 89.0, danceability: 0.647, valence: 0.422, energy: 0.645, acousticness: 0.0871, instrumentalness: 0.0, liveness: 0.671, speechiness: 0.0303
    },
    {
        track_name: "Timeless", popularity_new: 88.0, danceability: 0.769, valence: 0.57, energy: 0.722, acousticness: 0.0584, instrumentalness: 0.00000256, liveness: 0.111, speechiness: 0.0507
    },
    {
        track_name: "Blinding Lights", popularity_new: 88.0, danceability: 0.514, valence: 0.334, energy: 0.73, acousticness: 0.00146, instrumentalness: 0.0000954, liveness: 0.0897, speechiness: 0.0598
    },
    {
        track_name: "Starboy", popularity_new: 88.0, danceability: 0.679, valence: 0.486, energy: 0.587, acousticness: 0.141, instrumentalness: 0.00000635, liveness: 0.137, speechiness: 0.276
    },
    {
        track_name: "Save Your Tears", popularity_new: 85.0, danceability: 0.68, valence: 0.644, energy: 0.826, acousticness: 0.0212, instrumentalness: 0.0000124, liveness: 0.543, speechiness: 0.0309
    },
    {
        track_name: "The Hills", popularity_new: 85.0, danceability: 0.585, valence: 0.137, energy: 0.564, acousticness: 0.0671, instrumentalness: 0.0, liveness: 0.135, speechiness: 0.0515
    },
    {
        track_name: "Die For You", popularity_new: 85.0, danceability: 0.586, valence: 0.508, energy: 0.525, acousticness: 0.111, instrumentalness: 0.0, liveness: 0.134, speechiness: 0.0615
    },
    {
        track_name: "Call Out My Name", popularity_new: 84.0, danceability: 0.461, valence: 0.175, energy: 0.593, acousticness: 0.17, instrumentalness: 0.0, liveness: 0.307, speechiness: 0.0356
    },
    {
        track_name: "I Was Never There", popularity_new: 83.0, danceability: 0.323, valence: 0.155, energy: 0.737, acousticness: 0.142, instrumentalness: 0.000162, liveness: 0.163, speechiness: 0.0338
    },
    {
        track_name: "Popular (with Playboi Carti & Madonna) - From The Idol Vol. 1 (Music from the HBO Original Series)", popularity_new: 82.0, danceability: 0.855, valence: 0.852, energy: 0.678, acousticness: 0.0569, instrumentalness: 0.0000369, liveness: 0.412, speechiness: 0.189
    },
    {
        track_name: "Reflections Laughing (feat. Travis Scott, Florence + The Machine)", popularity_new: 81.0, danceability: 0.33, valence: 0.0382, energy: 0.355, acousticness: 0.135, instrumentalness: 0.00726, liveness: 0.131, speechiness: 0.0355
    },
    {
        track_name: "Is There Someone Else?", popularity_new: 81.0, danceability: 0.702, valence: 0.608, energy: 0.586, acousticness: 0.0388, instrumentalness: 0.0000727, liveness: 0.156, speechiness: 0.0313
    },
    {
        track_name: "Can't Feel My Face", popularity_new: 81.0, danceability: 0.705, valence: 0.583, energy: 0.769, acousticness: 0.113, instrumentalness: 0.0, liveness: 0.105, speechiness: 0.0425
    },
    {
        track_name: "Dancing In The Flames", popularity_new: 80.0, danceability: 0.552, valence: 0.162, energy: 0.73, acousticness: 0.0011, instrumentalness: 0.0, liveness: 0.0837, speechiness: 0.0381
    },
    {
        track_name: "Save Your Tears (Remix) (with Ariana Grande) - Bonus Track", popularity_new: 80.0, danceability: 0.65, valence: 0.593, energy: 0.825, acousticness: 0.0215, instrumentalness: 0.0000244, liveness: 0.0936, speechiness: 0.0325
    },
    {
        track_name: "Stargirl Interlude", popularity_new: 80.0, danceability: 0.715, valence: 0.426, energy: 0.47, acousticness: 0.353, instrumentalness: 0.0923, liveness: 0.104, speechiness: 0.0772
    },
    {
        track_name: "Enjoy The Show (feat. Future)", popularity_new: 79.0, danceability: 0.628, valence: 0.241, energy: 0.616, acousticness: 0.178, instrumentalness: 0.000047, liveness: 0.331, speechiness: 0.0526
    },
    {
        track_name: "Heartless", popularity_new: 78.0, danceability: 0.537, valence: 0.252, energy: 0.746, acousticness: 0.0236, instrumentalness: 0.00000101, liveness: 0.156, speechiness: 0.15
    },
    {
        track_name: "I Feel It Coming", popularity_new: 78.0, danceability: 0.773, valence: 0.585, energy: 0.819, acousticness: 0.426, instrumentalness: 0.0, liveness: 0.0679, speechiness: 0.118
    },
    {
        track_name: "I Can't Wait To Get There", popularity_new: 77.0, danceability: 0.65, valence: 0.122, energy: 0.436, acousticness: 0.538, instrumentalness: 0.00223, liveness: 0.118, speechiness: 0.048
    },
    {
        track_name: "Save Your Tears (with Ariana Grande) (Remix)", popularity_new: 77.0, danceability: 0.65, valence: 0.593, energy: 0.825, acousticness: 0.0215, instrumentalness: 0.0000244, liveness: 0.0936, speechiness: 0.0325
    },
    {
        track_name: "Die For You (with Ariana Grande) - Remix", popularity_new: 76.0, danceability: 0.575, valence: 0.506, energy: 0.5, acousticness: 0.227, instrumentalness: 0.0, liveness: 0.335, speechiness: 0.0707
    },
    {
        track_name: "Out of Time", popularity_new: 75.0, danceability: 0.65, valence: 0.838, energy: 0.76, acousticness: 0.255, instrumentalness: 0.0, liveness: 0.339, speechiness: 0.0446
    },
    {
        track_name: "In Your Eyes", popularity_new: 75.0, danceability: 0.667, valence: 0.717, energy: 0.719, acousticness: 0.00285, instrumentalness: 0.000081, liveness: 0.0736, speechiness: 0.0346
    },
    {
        track_name: "Earned It (Fifty Shades Of Grey)", popularity_new: 73.0, danceability: 0.659, valence: 0.406, energy: 0.291, acousticness: 0.405, instrumentalness: 0.0, liveness: 0.0771, speechiness: 0.0348
    },
    {
        track_name: "Baptized In Fear", popularity_new: 73.0, danceability: 0.564, valence: 0.419, energy: 0.513, acousticness: 0.138, instrumentalness: 0.0, liveness: 0.379, speechiness: 0.0325
    },
    {
        track_name: "The Abyss (feat. Lana Del Ray)", popularity_new: 72.0, danceability: 0.177, valence: 0.0518, energy: 0.422, acousticness: 0.197, instrumentalness: 0.00000334, liveness: 0.178, speechiness: 0.032
    },
    {
        track_name: "Less Than Zero", popularity_new: 72.0, danceability: 0.535, valence: 0.5, energy: 0.791, acousticness: 0.00096, instrumentalness: 0.000155, liveness: 0.0788, speechiness: 0.0327
    },
    {
        track_name: "Take My Breath", popularity_new: 69.0, danceability: 0.698, valence: 0.354, energy: 0.769, acousticness: 0.0128, instrumentalness: 0.00166, liveness: 0.238, speechiness: 0.0368
    },
    {
        track_name: "Open Hearts", popularity_new: 66.0, danceability: 0.658, valence: 0.333, energy: 0.753, acousticness: 0.00301, instrumentalness: 0.000469, liveness: 0.204, speechiness: 0.116
    },
    {
        track_name: "How Do I Make You Love Me?", popularity_new: 64.0, danceability: 0.805, valence: 0.636, energy: 0.498, acousticness: 0.0203, instrumentalness: 0.0000237, liveness: 0.085, speechiness: 0.0737
    },
    {
        track_name: "One Of The Girls (with JENNIE, Lily Rose Depp)", popularity_new: 63.0, danceability: 0.531, valence: 0.179, energy: 0.652, acousticness: 0.0524, instrumentalness: 0.00000139, liveness: 0.162, speechiness: 0.0325
    },
    {
        track_name: "Best Friends", popularity_new: 62.0, danceability: 0.737, valence: 0.528, energy: 0.564, acousticness: 0.436, instrumentalness: 0.0, liveness: 0.351, speechiness: 0.105
    },
    {
        track_name: "Wake Me Up (feat. Justice)", popularity_new: 62.0, danceability: 0.597, valence: 0.153, energy: 0.522, acousticness: 0.00426, instrumentalness: 0.00102, liveness: 0.492, speechiness: 0.034
    },
    {
        track_name: "Starry Eyes", popularity_new: 62.0, danceability: 0.309, valence: 0.146, energy: 0.418, acousticness: 0.465, instrumentalness: 0.0000758, liveness: 0.295, speechiness: 0.031
    },
    {
        track_name: "Give Me Mercy", popularity_new: 61.0, danceability: 0.642, valence: 0.278, energy: 0.674, acousticness: 0.167, instrumentalness: 0.0, liveness: 0.128, speechiness: 0.0489
    },
    {
        track_name: "Here We Go... Again (feat. Tyler, the Creator)", popularity_new: 61.0, danceability: 0.469, valence: 0.198, energy: 0.623, acousticness: 0.345, instrumentalness: 0.0, liveness: 0.588, speechiness: 0.0302
    },
    {
        track_name: "Don't Break My Heart", popularity_new: 60.0, danceability: 0.767, valence: 0.243, energy: 0.618, acousticness: 0.31, instrumentalness: 0.0, liveness: 0.179, speechiness: 0.032
    },
    {
        track_name: "Popular (with Playboi Carti & Madonna)", popularity_new: 60.0, danceability: 0.854, valence: 0.833, energy: 0.668, acousticness: 0.0604, instrumentalness: 0.0000839, liveness: 0.382, speechiness: 0.2
    },
    {
        track_name: "I Heard You're Married (feat. Lil Wayne)", popularity_new: 59.0, danceability: 0.736, valence: 0.784, energy: 0.848, acousticness: 0.103, instrumentalness: 0.0, liveness: 0.299, speechiness: 0.171
    },
    {
        track_name: "Take Me Back To LA", popularity_new: 59.0, danceability: 0.344, valence: 0.199, energy: 0.571, acousticness: 0.0721, instrumentalness: 0.0, liveness: 0.093, speechiness: 0.0461
    },
    {
        track_name: "Drive", popularity_new: 57.0, danceability: 0.574, valence: 0.258, energy: 0.536, acousticness: 0.15, instrumentalness: 0.0025, liveness: 0.132, speechiness: 0.0296
    },
    {
        track_name: "Given Up On Me", popularity_new: 56.0, danceability: 0.416, valence: 0.0604, energy: 0.386, acousticness: 0.0715, instrumentalness: 0.00512, liveness: 0.132, speechiness: 0.0541
    },
    {
        track_name: "Take My Breath - Single Version", popularity_new: 55.0, danceability: 0.747, valence: 0.523, energy: 0.739, acousticness: 0.0106, instrumentalness: 0.0000222, liveness: 0.101, speechiness: 0.0487
    },
    {
        track_name: "Without a Warning", popularity_new: 54.0, danceability: 0.332, valence: 0.0462, energy: 0.497, acousticness: 0.133, instrumentalness: 0.00000453, liveness: 0.643, speechiness: 0.0384
    },
    {
        track_name: "Hurry Up Tomorrow", popularity_new: 54.0, danceability: 0.449, valence: 0.0499, energy: 0.448, acousticness: 0.337, instrumentalness: 0.0000918, liveness: 0.139, speechiness: 0.035
    },
    {
        track_name: "Red Terror", popularity_new: 54.0, danceability: 0.293, valence: 0.164, energy: 0.31, acousticness: 0.399, instrumentalness: 0.0000428, liveness: 0.571, speechiness: 0.0347
    },
    {
        track_name: "A Tale By Quincy", popularity_new: 54.0, danceability: 0.447, valence: 0.572, energy: 0.513, acousticness: 0.679, instrumentalness: 0.0000298, liveness: 0.096, speechiness: 0.127
    },
    {
        track_name: "Every Angel is Terrifying", popularity_new: 53.0, danceability: 0.447, valence: 0.46, energy: 0.959, acousticness: 0.109, instrumentalness: 0.0000275, liveness: 0.0498, speechiness: 0.348
    },
    {
        track_name: "Opening Night", popularity_new: 52.0, danceability: 0.525, valence: 0.549, energy: 0.661, acousticness: 0.035, instrumentalness: 0.167, liveness: 0.377, speechiness: 0.0578
    },
    {
        track_name: "Phantom Regret by Jim", popularity_new: 52.0, danceability: 0.394, valence: 0.241, energy: 0.519, acousticness: 0.75, instrumentalness: 0.195, liveness: 0.129, speechiness: 0.0465
    },
    {
        track_name: "Big Sleep", popularity_new: 50.0, danceability: 0.246, valence: 0.123, energy: 0.353, acousticness: 0.433, instrumentalness: 0.00821, liveness: 0.478, speechiness: 0.0305
    }];