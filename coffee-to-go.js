const user {
    id: number
    name: string
    password: string
    cafes: []
    cart: []
    payments: []
}

const cafes {
    id: number
    name: string
    location: string
    nameAndLocation: string //`${name}@${location}` 
}

const cart {
    id: number
    items: []
}

const payments {
    id: number
    methodOfPayment: []
    total: double
    date: date
}