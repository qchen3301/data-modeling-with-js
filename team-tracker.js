const user {
    id: number
    name: string
    password: string
    favorites: []
}

const favorites {
    id: number
    players: []
    teams: []
}

const players {
    id: number
    name: string
    jerseyNumber: number
    teams: []
    positions: []
    awards: []
    yearsActive: date //??
}

const teams {
    id: number
    teamName: string
    hometown: string
    awards: []
    players: []
}