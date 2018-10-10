import { DELETE } from 'src/actions/types';
import Change from './Change';

type Delete = Change & {
    type: typeof DELETE;
};

export default Delete;