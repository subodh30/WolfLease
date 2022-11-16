export class CreateApartment {
    address: string;
    facilities: string;
    owner_id: number;

    constructor(json?: any) {
        if (json) {
            this.address = json.address;
            this.facilities = json.facilites;
            this.owner_id = json.owner_id;
        }
        else{
            this.address = "";
            this.facilities = "";
            this.owner_id = 0;
        }
    }
}