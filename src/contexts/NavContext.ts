import { Context } from 'react';
import { initContext } from './initContext';
import { NavModel, NavState } from '../models/NavModel';

export const NavContext: Context<NavModel> = initContext<NavState, NavModel>();
