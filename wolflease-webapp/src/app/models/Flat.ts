export class Flat {
    id: string;
    availability: boolean;
    rent_per_room: number;
    floor_number: number;
    associated_apt_id: string;
    lease_id: string;

    constructor(json?: any) {
        if (json) {
            this.id = json.id;
            this.availability = json.availability;
            this.rent_per_room = json.rent_per_room;
            this.floor_number = json.floor_number;
            this.associated_apt_id = json.associated_apt_id;
            this.lease_id = json.lease_id;
        }
        else {
            this.id = "";
            this.availability = false;
            this.rent_per_room = 0;
            this.floor_number = 0;
            this.associated_apt_id = "";
            this.lease_id = "";
        }
    }
}