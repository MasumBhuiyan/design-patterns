import { PointIcon } from './PointIcon'
import { PointType } from './PointType'

export class PointIconFactory {
    private map = new Map<PointType, PointIcon>();

    public getPointIcon(pointType:PointType):PointIcon|any {
        if( this.map.has(pointType) == false ) {
            let icon = new PointIcon(pointType, "");
            this.map.set(pointType, icon);
        }
        return this.map.get(pointType);
    }
}