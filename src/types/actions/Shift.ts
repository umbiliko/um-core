import { SHIFT } from 'src/actions/types';
import Change from './Change';

type Shift = Change & {
    type: typeof SHIFT;
};

export default Shift;