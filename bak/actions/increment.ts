import { INCREMENT } from './types';
import { Path } from 'src/typings';
import actions from 'src/types/actions';

export default (path: Path, amount: number | undefined = undefined): actions[typeof INCREMENT] => ({
    amount,
    path,
    type: INCREMENT
});