import * as React from 'react';
import { ViewConfig } from '../../models/index';
interface ViewportProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    config: ViewConfig;
}
export declare const Viewport: React.FC<ViewportProps>;
export {};
