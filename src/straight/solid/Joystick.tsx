import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Joystick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,18h-2v-2h-2v2h-4V7.858c1.721-.447,3-2,3-3.858,0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.858,1.279,3.411,3,3.858v10.142H3c-1.654,0-3,1.346-3,3v3h24v-3c0-1.654-1.346-3-3-3Z"/></svg>

);
