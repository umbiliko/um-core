import { PATCH } from 'src/actions/types';
import Change from './Change';

type Patch<Payload = any> = Change & {
    payload: Payload;
    type: typeof PATCH;
};

export default Patch;