import * as React from 'react';
import { ReactNode, useState } from 'react';
import { fromJS, Map } from 'immutable';
import { Element } from 'ntt-view';
import { ViewContext } from '../../contexts/index';
import { ViewConfig, ViewModel, ViewState } from '../../models/index';

interface ViewportProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    config: ViewConfig;
}

export const Viewport: React.FC<ViewportProps> = ({ children, config, ...props }: ViewportProps) => {
    const [state, setState] = useState<Map<keyof ViewState, FlatArray | ValueType | null>>(fromJS({
        theme: 'light'
    }));

    const render = (element: Element): ReactNode => {
        const def = config[element.type] || null;
        switch (element.type) {
            case 'AppBar':
                return null;
        }
        return def;
    };

    const model: ViewModel = {
        ...config,
        render,
        setTheme: (theme: string) => setState(state.set('theme', theme)),
        setState: (key: keyof ViewState, value: FlatArray | ValueType | null) => setState(state.set(key, value)),
        state
    };

    return (
        <div className="Viewport" {...props}>
            <ViewContext.Provider value={model}>
                {children}
            </ViewContext.Provider>
        </div>
    );
};
