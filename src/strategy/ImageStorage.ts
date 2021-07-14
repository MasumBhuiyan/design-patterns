import { Compressor } from "./Compressor";
import { Filter } from "./Filter";

export class ImageStorage {
    private filter:Filter;
    private compressor:Compressor;
    private fileName:string;

    constructor(fileName:string, filter:Filter, compressor:Compressor) {
        this.fileName = fileName;
        this.filter = filter;
        this.compressor = compressor;
    }

    apply():string {
        const filteredImage = this.filter.apply();
        const compressedImage = this.compressor.compress();
        return compressedImage + " and " + filteredImage;
    }
}