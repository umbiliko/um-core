import { Context, createContext } from 'react';
import { AppModel, AppState, AppAction } from '../models';

export const AppContext: Context<AppModel<AppState, AppAction>> =
    createContext<AppModel<AppState, AppAction>>({} as AppModel<AppState, AppAction>);
