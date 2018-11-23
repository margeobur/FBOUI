export interface OldDBCustomer  {
    id: number,
    username: string, 
    firstName: string,
    surname: string,
    address: string,
    accounts: any[]
}

export interface NewDBCustomer {
    id: string,
    username: string,
    givenNames: string[],
    email: string,
    accounts: any[]
}

export interface LinkedCustomer {
    link: {
        id: string,
        oldID: number,
        newID: string
    },
    oldData?: OldDBCustomer,
    newData?: NewDBCustomer
}