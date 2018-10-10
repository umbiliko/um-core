import { UPDATE } from 'src/actions/types';
import Change from './Change';

type Update<T = any> = Change<T> & {
    type: typeof UPDATE;
};

export default Update;