import { Compressor } from './Compressor';

export class JpegCompressor implements Compressor {
    compress():string {
        return "Compressor: jpeg";
    }
}