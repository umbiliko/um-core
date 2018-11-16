import * as React from 'react';

export const NotImplemented = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div {...props}>"NotImplemented"</div>
    );
};
