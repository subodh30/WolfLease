export class User {
    id: string;
    contact_number: string;
    contact_email: string;
    password: string;
    user_type: string;
    dob: string;
    gender: string;
    pref_smoking: string;
    pref_drinking: string;
    pref_veg: string;
    flat_id: string;

    constructor(json?: any) {
        if (json) {
            this.id = json.id;
            this.contact_number = json.contact_number;
            this.contact_email = json.contact_email;
            this.password = json.password;
            this.user_type = json.user_type;
            this.dob = json.dob;
            this.gender = json.gender;
            this.pref_smoking = json.pref_smoking;
            this.pref_drinking = json.pref_drinking;
            this.pref_veg = json.pref_veg;
            this.flat_id = json.flat_id;
        }
        else {
            this.id = "";
            this.contact_number = "";
            this.contact_email = "";
            this.password = "";
            this.user_type = "";
            this.dob = "";
            this.gender = "";
            this.pref_smoking = "";
            this.pref_drinking = "";
            this.pref_veg = "";
            this.flat_id = "";
        }
    }
}