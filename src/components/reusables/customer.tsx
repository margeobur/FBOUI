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
    oldData?: OldDBCustomer,
    newData?: NewDBCustomer
}