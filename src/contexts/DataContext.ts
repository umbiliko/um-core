import { createContext } from 'react';
import { fromJS, Map } from 'immutable';

export const DataContext = createContext<Map<string, any>>(fromJS({ }));
