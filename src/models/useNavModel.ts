import { useContext } from 'react';
import { NavContext } from '../contexts';
import { NavModel } from './NavModel';

export const useNavModel = (): NavModel => {
    if (!useContext) {
        throw new Error('React >= 16.3 required');
    }
    return useContext(NavContext)
}
