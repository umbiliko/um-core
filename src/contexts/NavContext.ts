import { Context } from 'react';
import { ImmutableStateContextType, initContext } from './initContext';

export interface NavState extends FlatObject {
    key?: string;
    hash: string;
    pathname: string;
    search: string;
}

export interface NavContextType extends ImmutableStateContextType<NavState> {
    push(path: string, state?: NavState): void;
    push(location: Partial<NavState>): void;
    replace(path: string, state?: NavState): void;
    replace(location: Partial<NavState>): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
}

export const NavContext: Context<NavContextType> = initContext<NavState, NavContextType>();
