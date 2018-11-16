import { useContext } from 'react';
import { ViewContext } from '../contexts';
import { ViewModel } from './ViewModel';

export const useViewModel = (): ViewModel => {
    if (!useContext) {
        throw new Error('React >= 16.3 required');
    }
    return useContext(ViewContext);
};
