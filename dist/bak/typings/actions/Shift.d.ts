import { SHIFT } from 'src/actions/types';
import Change from './Change';
declare type Shift = Change & {
    type: typeof SHIFT;
};
export default Shift;
