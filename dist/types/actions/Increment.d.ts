import { INCREMENT } from 'src/actions/types';
import Change from './Change';
declare type Increment = Change & {
    amount?: number;
    type: typeof INCREMENT;
};
export default Increment;
