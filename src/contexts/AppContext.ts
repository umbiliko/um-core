import { Context, createContext } from 'react';
import { AppModel } from '../models/AppModel';

export const AppContext: Context<AppModel<FlatObject>> = createContext<AppModel<FlatObject>>({} as AppModel<FlatObject>);
