import { PointIcon } from './PointIcon'

export class Point {
    private x:number;
    private y:number;
    private pointIcon:PointIcon;

    constructor(x:number, y:number, pointIcon:PointIcon) {
        this.x = x;
        this.y = y;
        this.pointIcon = pointIcon;
    }

    public draw() {
        console.log(`${this.pointIcon.getType()} at (${this.x}, ${this.y})`);
    }
}