import { SHIFT } from './types';
import { Path } from 'src/typings';
import actions from 'src/types/actions';

export default (path: Path): actions[typeof SHIFT] => ({
    path,
    type: SHIFT
});