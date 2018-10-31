import { ArrayPath, Point, State, Vector } from 'src/types';
import { getIn, isMatrix, isVector, rotate, setIn } from 'src/utils';

export default (arrPath: ArrayPath, state: State, vector: Vector): State => {

    const rotation = (axis: Vector, ang: number) => {
        if (typeof ang === 'number' && ang !== 0 && ang !== NaN) {
            const cos = Math.cos(ang);
            const sin = Math.sin(ang);
            
            return (point: Point) =>  rotate(point, axis, cos, sin);
        }

        return (point: Point) => point;
    };

    const rotateX = rotation({ x: 1, y: 0, z: 0 }, vector.x);
    const rotateY = rotation({ x: 0, y: 1, z: 0 }, vector.y);
    const rotateZ = rotation({ x: 0, y: 0, z: 1 }, vector.z);

    const source = getIn(arrPath, state);
    
    if (isMatrix(source)) {
        return setIn(arrPath, state, {
            x: rotateZ(rotateY(rotateX({ ...source.x }))),
            y: rotateZ(rotateY(rotateX({ ...source.y }))),
            z: rotateZ(rotateY(rotateX({ ...source.z })))
        });
    } else if (isVector(source)) {
        return setIn(arrPath, state, rotateZ(rotateY(rotateX({ ...source }))));
    }
    
    return state;
};


