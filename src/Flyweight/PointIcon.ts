import { PointType } from './PointType'

export class PointIcon {
    private pointType:PointType;
    private iconData:string;

    constructor(pointType:PointType, iconData:string) {
        this.pointType = pointType;
        this.iconData = iconData;
    }

    public getType():PointType {
        return this.pointType;
    }
}