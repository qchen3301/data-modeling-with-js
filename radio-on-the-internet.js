const user {
    id: number
    username: string
    password: string
    station: []
    subscription: boolean //premium(true) or free(untrue) 
}

const station {
    id: number
    genre: string
    popularity number //algorithmically generated...somehow
    userPlaylists []
    autoPlaylist: []
}

const userPlaylist {
    id: number
    songs: [] //listed by idNumber from another object array
}

const autoPlaylist {
    id: number 
    songs: []
}

const songs: {
    id: number
    name: string
    artist: string
    album: string
}