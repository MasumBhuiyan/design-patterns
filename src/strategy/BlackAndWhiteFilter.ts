import { Filter } from "./Filter";

export class BlackAndWhiteFilter implements Filter {
    apply():string {
        return "Filter: black and white"
    }
}