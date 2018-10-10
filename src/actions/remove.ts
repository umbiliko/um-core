import { REMOVE } from './types';
import { Path } from 'src/types';
import actions from 'src/types/actions';

export default (path: Path, at: number): actions[typeof REMOVE] => ({
    at,
    path,
    type: REMOVE
});