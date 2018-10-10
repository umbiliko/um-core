import Path from '../types/Path';
import State from '../types/State';

export default (state: State, { path }: { path: Path }): number | undefined => state.version;