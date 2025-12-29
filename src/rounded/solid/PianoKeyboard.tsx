import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PianoKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,12v-5C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5v5H0Zm19,2v3c0,.552-.448,1-1,1s-1-.448-1-1v-3h-2v3c0,.552-.448,1-1,1s-1-.448-1-1v-3h-2v3c0,.552-.448,1-1,1s-1-.448-1-1v-3h-2v3c0,.552-.448,1-1,1s-1-.448-1-1v-3H0v3c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-3h-5Z"/>
</svg>

);
