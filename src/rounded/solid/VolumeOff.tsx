import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VolumeOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.004,23.814c-.061,0-.121-.005-.181-.017-2.999-.551-5.752-2.299-7.554-4.794h-1.271C2.241,19.003-.002,16.76-.002,14.003v-4.005C-.002,7.241,2.241,4.998,4.998,4.998h1.271C8.068,2.505,10.821.758,13.822.204c.294-.052.594.025.821.215.229.19.36.472.36.769v21.627c0,.297-.132.579-.36.769-.181.151-.407.231-.64.231Z"/></svg>

);
