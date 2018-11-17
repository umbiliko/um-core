import * as React from 'react';
import { createResource } from '../effects/createResource';
export const VideoResource = createResource((src) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = src;
        video.oncanplay = () => {
            resolve(video);
        };
        video.onerror = reject;
    });
});
export const Video = props => {
    VideoResource.read(props.src);
    return React.createElement("video", Object.assign({}, props));
};
//# sourceMappingURL=Video.js.map