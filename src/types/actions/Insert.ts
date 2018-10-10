import { INSERT } from 'src/actions/types';
import Change from './Change';

type Insert<T = any> = Change<T> & {
    at?: number;
    type: typeof INSERT;
};

export default Insert;