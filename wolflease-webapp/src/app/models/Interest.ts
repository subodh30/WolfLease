export class Interest {
    id: string;
    apartment_id: string;
    flat_id: string;
    user_id: string;

    constructor(json?: any) {
        if (json) {
            this.id = json.id;
            this.apartment_id = json.apartment_id;
            this.flat_id = json.flat_id;
            this.user_id = json.user_id;
        }
        else {
            this.id = "";
            this.apartment_id = "";
            this.flat_id = "";
            this.user_id = "";
        }
    }
}