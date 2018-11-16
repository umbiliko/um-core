import { INSERT } from 'src/actions/types';
import Change from './Change';
declare type Insert<Payload = any> = Change & {
    at?: number;
    payload: Payload;
    type: typeof INSERT;
};
export default Insert;
