import { Point } from './Point';
import { PointIconFactory } from './PointIconFactory';
import { PointType } from './PointType';

export class PointService {
    private pointIconFactory:PointIconFactory = new PointIconFactory();

    constructor(pointIconFactory:PointIconFactory) {
        this.pointIconFactory = pointIconFactory;
    }

    public getPoints():Point[]|any {
        let points:Point[] = [];
        points.push(new Point(1, 2, this.pointIconFactory.getPointIcon(PointType.CAFE)));
        return points;
    }
}

let service = new PointService(new PointIconFactory());

for(let point of service.getPoints()) {
    point.draw();
}