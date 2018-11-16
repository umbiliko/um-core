import { CLEAR } from './types';
import { Path } from 'src/typings';
import actions from 'src/types/actions';

export default (path: Path): actions[typeof CLEAR] => ({
    path,
    type: CLEAR
});