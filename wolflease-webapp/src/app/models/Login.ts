export class Login {
    email: string;
    password: string;
    role: string;

    constructor(json?: any) {
        if (json) {
            this.email = json.email;
            this.password = json.password;
            this.role = json.role;
        }
        else {
            this.email = "";
            this.password = "";
            this.role = "";
        }
    }
}