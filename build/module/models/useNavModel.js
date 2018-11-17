import { useContext } from 'react';
import { NavContext } from '../contexts';
export const useNavModel = () => {
    if (!useContext) {
        throw new Error('React >= 16.3 required');
    }
    return useContext(NavContext);
};
//# sourceMappingURL=useNavModel.js.map