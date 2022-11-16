export class GetOwner {
    contact_number: string;
    contact_email: string;
    password: string;
    id : string;

    constructor(json?: any) {
        if (json) {
            this.id = json.id;
            this.contact_number = json.contact_number;
            this.contact_email = json.contact_email;
            this.password = json.password;
        }
        else{
            this.contact_number = "";
            this.contact_email = "";
            this.password = "";
            this.id = "";
        }
    }
}