import * as React from 'react';
import { createResource } from '../effects/createResource';
export const AudioResource = createResource((src) => {
    return new Promise((resolve, reject) => {
        const audio = document.createElement('audio');
        audio.src = src;
        audio.onloadeddata = () => resolve(audio);
        audio.onerror = reject;
        document.body.append(audio);
    });
});
export const Audio = (props) => {
    AudioResource.read(props.src);
    return React.createElement("audio", Object.assign({}, props));
};
//# sourceMappingURL=Audio.js.map