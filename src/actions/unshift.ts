import { UNSHIFT } from './types';
import { Path } from 'src/types';
import actions from 'src/types/actions';

export default (path: Path): actions[typeof UNSHIFT] => ({
    path,
    type: UNSHIFT
});