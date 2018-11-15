import { createContext, ProviderProps, ValidationMap } from 'react';
import { fromJS, Map } from 'immutable';

const context = createContext<Map<string, any>>(fromJS({ }));

export const provider = context.Provider;

export const consumer = context.Consumer;

export default context;
