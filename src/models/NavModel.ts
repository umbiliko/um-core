import { ContextModel } from './ContextModel';

export interface NavState extends FlatObject {
    key?: string;
    hash: string;
    pathname: string;
    search: string;
}

export interface NavModel extends ContextModel<NavState> {
    // push(path: string, state?: NavState): void;
    push(location: Partial<NavState>): void;
    // replace(path: string, state?: NavState): void;
    replace(location: Partial<NavState>): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
}
