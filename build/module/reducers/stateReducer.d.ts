import { Map } from 'immutable';
declare const RESET = "RESET";
declare const SET = "SET";
declare const SET_IN = "SET_IN";
declare const UPDATE = "UPDATE";
declare const UPDATE_IN = "UPDATE_IN";
export declare type ImmutableState = Map<string, any>;
export interface ImmutableAction {
    RESET: {
        next: ImmutableState;
        type: typeof RESET;
    };
    SET: {
        key: string;
        type: typeof SET;
        value: any;
    };
    SET_IN: {
        keyPath: KeyPath;
        type: typeof SET_IN;
        value: any;
    };
    UPDATE: {
        key: string;
        type: typeof UPDATE;
        value: any;
    };
    UPDATE_IN: {
        keyPath: KeyPath;
        type: typeof UPDATE_IN;
        value: any;
    };
}
export declare const actions: {
    reset: (next: Map<string, any>) => {
        next: Map<string, any>;
        type: "RESET";
    };
    set: (key: string, value: any) => {
        key: string;
        type: "SET";
        value: any;
    };
    setIn: (keyPath: (string | number)[], value: any) => {
        keyPath: (string | number)[];
        type: "SET_IN";
        value: any;
    };
    update: (key: string, value: any) => {
        key: string;
        type: "UPDATE";
        value: any;
    };
    updateIn: (keyPath: (string | number)[], value: any) => {
        keyPath: (string | number)[];
        type: "UPDATE_IN";
        value: any;
    };
};
declare const _default: (state: Map<string, any>, action: {
    next: Map<string, any>;
    type: "RESET";
} | {
    key: string;
    type: "SET";
    value: any;
} | {
    keyPath: (string | number)[];
    type: "SET_IN";
    value: any;
} | {
    key: string;
    type: "UPDATE";
    value: any;
} | {
    keyPath: (string | number)[];
    type: "UPDATE_IN";
    value: any;
}) => Map<string, any>;
export default _default;
