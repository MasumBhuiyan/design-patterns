import { Compressor } from "./Compressor";

export class PngCompressor implements Compressor {
    compress():string {
        return "Compressor: png"
    }
}