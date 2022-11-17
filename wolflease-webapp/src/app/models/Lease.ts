export class Lease {
    id: string;
    lease_start_date: string;
    lease_end_date: string;

    constructor(json?: any) {
        if (json) {
            this.id = json.id;
            this.lease_start_date = json.lease_start_date;
            this.lease_end_date = json.lease_end_date;
        }
        else {
            this.id = "";
            this.lease_start_date = "";
            this.lease_end_date = "";
        }
    }
}