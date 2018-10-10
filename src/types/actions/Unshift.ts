import { UNSHIFT } from 'src/actions/types';
import Change from './Change';

type Unshift = Change & {
    type: typeof UNSHIFT;
};

export default Unshift;