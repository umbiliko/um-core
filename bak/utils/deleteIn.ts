import { Map } from 'immutable';
import { Path } from 'src/typings';

export default (root: any, keyPath: Path): any => {
    if (Map.isMap(root)) {
        return (root as Map<string, any>).deleteIn(keyPath);
    }
};