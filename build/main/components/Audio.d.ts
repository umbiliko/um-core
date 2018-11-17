/// <reference path="../../../typings/react-cache.d.ts" />
import * as React from 'react';
export declare const AudioResource: import("react-cache").Resource<string, HTMLAudioElement>;
export interface AudioProps extends React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> {
}
export declare const Audio: React.FC<AudioProps>;
