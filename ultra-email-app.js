//Ultra email app schema

const User {
    id: number
    username: string
    password: string
    email-services: []
}

const emailServices {
    id: number
    service: string //for example: yahoo, hotmail, gmail, etc.
    username: string
    password: string
    verification: boolean
}