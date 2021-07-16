import { Authenticator } from "./Authenticator";
import { Compressor } from "./Compressor";
import { HttpRequest } from "./HttpRequest";
import { Logger } from "./Logger";
import { WebsServer } from "./WebServer";

describe("Chain of responsibility", () => {
    it("should return valid authentication", () => {
        const compressor = new Compressor(null);
        const logger = new Logger(compressor);
        const authenticator = new Authenticator(logger);
        const server = new WebsServer(authenticator);
    
        server.handle(new HttpRequest("admin", "1234"));
    });
});