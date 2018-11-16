import { Context } from 'react';
import { initContext } from './initContext';
import { ViewModel, ViewState } from '../models/ViewModel';

export const ViewContext: Context<ViewModel> = initContext<ViewState, ViewModel>();
