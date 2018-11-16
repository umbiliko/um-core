import { UNSHIFT } from './types';
import { Path } from 'src/typings';
import actions from 'src/types/actions';

export default (path: Path): actions[typeof UNSHIFT] => ({
    path,
    type: UNSHIFT
});