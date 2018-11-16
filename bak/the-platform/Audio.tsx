import React from 'react';
import { createResource } from './createResource';

export const AudioResource = createResource((src: string) => {
  return new Promise((resolve, reject) => {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.onloadeddata = () => resolve(audio);
    audio.onerror = reject;
    document.body.append(audio);
  }) as Promise<HTMLAudioElement>;
});

export interface AudioProps extends React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> {
}

export const Audio: React.FC<AudioProps> = (props: AudioProps) => {
  AudioResource.read(props.src);
  return <audio {...props} />;
};
