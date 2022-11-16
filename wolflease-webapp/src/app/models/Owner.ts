export class Owner {
    number: string;
    email: string;
    password: string;

    constructor(json?: any) {
        if (json) {
            this.number = json.contact_number;
            this.email = json.contact_email;
            this.password = json.password;
        }
        else{
            this.number = "";
            this.email = "";
            this.password = "";
        }
    }
}