CREATE DATABASE
    IF NOT EXISTS "pg-crud"
WITH
    OWNER = postgres ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Argentina.1252' LC_CTYPE = 'Spanish_Argentina.1252' TABLESPACE = pg_default CONNECTION
LIMIT = -1 IS_TEMPLATE = False;

CREATE TABLE
    songs (
        id serial NOT NULL PRIMARY KEY,
        name VARCHAR(50),
        author VARCHAR(50),
        album VARCHAR(50),
        duration_ms INT,
        img TEXT,
        yt_link TEXT
    );

CREATE TABLE
    users (
        id serial NOT NULL PRIMARY KEY,
        username VARCHAR(50),
        email VARCHAR(100),
        password VARCHAR(100)
    );

INSERT INTO
    songs (
        name,
        author,
        album,
        duration_ms,
        img,
        yt_link
    )
values (
        'Ritual',
        'Ghost',
        'Opus Eponymous',
        269000,
        'https://cdns-images.dzcdn.net/images/cover/36dc73ab01480acec21db3f2b5bc706d/500x500.jpg',
        'https://www.youtube.com/watch?v=0PakoE1eBps'
    ), (
        'Year Zero',
        'Ghost',
        'Infestissumam',
        350000,
        'https://cdns-images.dzcdn.net/images/cover/6a1b7487da18ddc3f1a5f5d040a989ca/500x500.jpg',
        'https://www.youtube.com/watch?v=gkBt7yLXyDk'
    ), (
        'From The Pinnacle To The Pit',
        'Ghost',
        'Meliora',
        243000,
        'https://cdns-images.dzcdn.net/images/cover/ce0f59f9c7d5b114260f3af50af5dcb9/500x500.jpg',
        'https://www.youtube.com/watch?v=6A-IoOEPbUs'
    ), (
        'Witch Image',
        'Ghost',
        'Prequelle',
        210000,
        'https://cdns-images.dzcdn.net/images/cover/43a420aa0b32cf1b3ef20e29dfce0c12/500x500.jpg',
        'https://www.youtube.com/watch?v=rtkaUZvMaG8'
    ), (
        'Hunters Moon',
        'Ghost',
        'Impera',
        196000,
        'https://cdns-images.dzcdn.net/images/cover/bc48dc99554a44aaf15600627a11d23a/500x500.jpg',
        'https://www.youtube.com/watch?v=rtkaUZvMaG8'
    ), (
        'Mary On A Cross',
        'Ghost',
        'Seven Inches Of Satanic Panic',
        245000,
        'https://cdns-images.dzcdn.net/images/cover/dde66ec3d6cb5d4d6355b1b6ead83a46/500x500.jpg',
        'https://www.youtube.com/watch?v=aBt2Djy37tQ'
    );

--select * from songs

--drop table songs