import * as React from 'react';
import { createResource } from '../effects/createResource';

const hashingFn = ({ src, srcSet }: { src: string, srcSet?: string }) => `${src}${srcSet}`;

export const ImgResource = createResource(({ src, srcSet }: { src: string, srcSet?: string }) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        if (srcSet) {
            image.srcset = srcSet;
        }
        image.onload = resolve;
        image.onerror = reject;
    }) as Promise<Event>;
}, hashingFn);

interface ImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export const Img: React.FC<ImgProps> = (props: ImgProps) => {
    const { src, srcSet } = props;
    if (src) {
        ImgResource.read({ src, srcSet });
    }
    return <img {...props} />;
};
