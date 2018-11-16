import { PATCH } from './types';
import { Path } from 'src/typings';
import actions from 'src/types/actions';

export default (path: Path, payload: any): actions[typeof PATCH] => ({
    path,
    payload,
    type: PATCH
});