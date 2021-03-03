class Media {
    constructor(info) {
        this.publicDate = info.publicDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemain Rhapsody",
    publicDate: 1975,
});

console.log(mySong);