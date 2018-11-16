import { INSERT } from './types';
import { Path } from 'src/typings';
import actions from 'src/types/actions';

export default (path: Path, payload: any, at: number | undefined = undefined): actions[typeof INSERT] => ({
    at,
    path,
    payload,
    type: INSERT
});