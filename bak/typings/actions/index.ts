import Concat from './Concat';
import Clear from './Clear';
import Decrement from './Decrement';
import Delete from './Delete';
import Increment from './Increment';
import Insert from './Insert';
import Patch from './Patch';
import Remove from './Remove';
import Shift from './Shift';
import Unshift from './Unshift';
import Update from './Update';

type actions = {
    CONCAT: Concat;
    CLEAR: Clear;
    DECREMENT: Decrement;
    DELETE: Delete;
    INCREMENT: Increment;
    INSERT: Insert;
    PATCH: Patch;
    REMOVE: Remove;
    SHIFT: Shift;
    UNSHIFT: Unshift;
    UPDATE: Update;
};

export default actions;