import { UPDATE } from 'src/actions/types';
import Change from './Change';

type Update<Payload = any> = Change & {
    payload: Payload;
    type: typeof UPDATE;
};

export default Update;