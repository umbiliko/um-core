import { ContextModel } from './ContextModel';
export interface NavState extends FlatObject {
    key?: string;
    hash: string;
    pathname: string;
    search: string;
}
export interface NavModel extends ContextModel<NavState> {
    push(location: Partial<NavState>): void;
    replace(location: Partial<NavState>): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
}
