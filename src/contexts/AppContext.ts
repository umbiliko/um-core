import { Context, createContext } from 'react';
import { AppModel, AppActionType } from '../models';

export const AppContext: Context<AppModel<FlatObject, AppActionType>> =
    createContext<AppModel<FlatObject, AppActionType>>({} as AppModel<FlatObject, AppActionType>);
