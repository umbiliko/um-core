import Path from '../Path';

type Change<Payload = undefined> = {
    path: Path;
    payload: Payload;
};

export default Change;