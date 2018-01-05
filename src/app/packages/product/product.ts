import { Image } from "./image";

export class Product {
    constructor(
        public id: string, 
        public name: string,
        public description: string,
        public price: number,
        public images: Image[] = []
    ) {}
}