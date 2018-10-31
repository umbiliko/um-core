import { DELETE } from 'src/actions/types';
import Change from './Change';
declare type Delete = Change & {
    type: typeof DELETE;
};
export default Delete;
