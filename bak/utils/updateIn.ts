import { Map } from 'immutable';
import { Path } from 'src/typings';

export default (root: any, keyPath: Path, value: any): any => {
    if (Map.isMap(root)) {
        return (root as Map<string, any>).updateIn(keyPath, value);
    }
};