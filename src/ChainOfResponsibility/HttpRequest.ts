export class HttpRequest {
    private userName:string;
    private password:string;

    constructor(userName:string, password:string) {
        this.userName = userName;
        this.password = password;
    }
    
    getPassword():string {
        return this.password;
    }

    getUserName():string {
        return this.userName;
    }
}