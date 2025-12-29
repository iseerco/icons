import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLeaderSpeech = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,6c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm10,15h-6V7.673L23.393.809l-.786-.618-5.35,6.809h-6.514L5.393.191l-.786.618,5.393,6.864v8.327h-6v-3.293l.99-.99c.297.176.64.283,1.01.283,1.103,0,2-.897,2-2s-.897-2-2-2-2,.897-2,2c0,.37.108.712.283,1.01l-1.283,1.283v3.707H0v1h3v7h1v-7h16v7.167h1v-7.167h3v-1ZM6,9c.551,0,1,.449,1,1s-.449,1-1,1-1-.449-1-1,.449-1,1-1Zm5-1h6v8h-6v-8Z"/>
</svg>

);
