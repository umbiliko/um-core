import { REMOVE } from 'src/actions/types';
import Change from './Change';
declare type Remove = Change & {
    at: number;
    type: typeof REMOVE;
};
export default Remove;
