import { CONCAT } from 'src/actions/types';
import Change from './Change';

type Concat = Change & {
    payload: Array<any>;
    type: typeof CONCAT;
};

export default Concat;