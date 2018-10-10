import { PATCH } from 'src/actions/types';
import Change from './Change';

type Patch<T = any> = Change<T> & {
    type: typeof PATCH;
};

export default Patch;