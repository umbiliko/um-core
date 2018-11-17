import { useContext } from 'react';
import { ViewContext } from '../contexts';
export const useViewModel = () => {
    if (!useContext) {
        throw new Error('React >= 16.3 required');
    }
    return useContext(ViewContext);
};
//# sourceMappingURL=useViewModel.js.map