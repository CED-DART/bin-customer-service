class CustomerService {
    constructor(){
        this.id = null;
        this.created = null;
        this.title = null;
        this.company = null;
        this.description = null;
        this.protocolNumber = [{
            "created": "",
            "number": ""
        }];
        this.tags = [];
        this.attachments = [{
            "created": "",
            "name": "",
            "path": ""
        }];
        this.resolved = null;
        this.promiseSolutionDate = null;
    }
}

export default CustomerService;