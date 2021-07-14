export class Circle {
    private radius:number;

    constructor(radius:number) {
        this.radius = radius;
    }

    public getRadius():number {
        return this.radius;
    }
}

const circle = new Circle(2);
console.log(circle.getRadius());
