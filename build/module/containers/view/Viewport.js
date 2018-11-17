import * as React from 'react';
import { useState } from 'react';
import { fromJS } from 'immutable';
import { ViewContext } from '../../contexts/index';
export const Viewport = ({ children, config, ...props }) => {
    const [state, setState] = useState(fromJS({
        theme: 'light'
    }));
    const render = (element) => {
        const def = config[element.type] || null;
        switch (element.type) {
            case 'AppBar':
                return null;
        }
        return def;
    };
    const model = {
        ...config,
        render,
        setTheme: (theme) => setState(state.set('theme', theme)),
        setState: (key, value) => setState(state.set(key, value)),
        state
    };
    return (React.createElement("div", Object.assign({ className: "Viewport" }, props),
        React.createElement(ViewContext.Provider, { value: model }, children)));
};
//# sourceMappingURL=Viewport.js.map