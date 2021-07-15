import { BlackAndWhiteFilter } from "./BlackAndWhiteFilter";
import { ImageStorage } from "./ImageStorage";
import { PngCompressor } from "./PngCompressor";

describe("Strategy pattern", () => {
    const imageStorage = new ImageStorage("image.png", new BlackAndWhiteFilter(), new PngCompressor());
    it("should pass", () => {
        expect(imageStorage.apply()).toBe("Compressor: png and Filter: black and white");
    })
});