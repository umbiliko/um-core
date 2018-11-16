import { UNSHIFT } from 'src/actions/types';
import Change from './Change';
declare type Unshift = Change & {
    type: typeof UNSHIFT;
};
export default Unshift;
