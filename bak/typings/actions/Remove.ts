import { REMOVE } from 'src/actions/types';
import Change from './Change';

type Remove = Change & {
    at: number;
    type: typeof REMOVE;
};

export default Remove;