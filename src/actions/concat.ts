import { CONCAT } from './types';
import { Path } from 'src/types';
import actions from 'src/types/actions';

export default (path: Path, payload: Array<any>): actions[typeof CONCAT] => ({
    path,
    payload,
    type: CONCAT
});