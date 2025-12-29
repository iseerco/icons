import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PianoKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,12v-7c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3v7H0Zm19,2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4H0v8h24v-8h-5Z"/>
</svg>

);
