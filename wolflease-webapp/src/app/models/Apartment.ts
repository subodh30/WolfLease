export class Apartment {
    id: string;
    address: string;
    facilities: string;
    owner_id: number;

    constructor(json?: any) {
        if (json) {
            this.id = json.id;
            this.address = json.address;
            this.facilities = json.facilities;
            this.owner_id = json.owner_id;
        }
        else{
            this.id = "";
            this.address = "";
            this.facilities = "";
            this.owner_id = 0;
        }
    }
}