import { Context, createContext } from 'react';
import { NavModel } from '../models/NavModel';

export const NavContext: Context<NavModel> = createContext<NavModel>({} as NavModel);
