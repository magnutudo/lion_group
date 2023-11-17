export class Author {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;

    dateOfBirth: Date;

    constructor(id, lastName, firstName, middleName, dateOfBirth) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.dateOfBirth = dateOfBirth
    }
}
