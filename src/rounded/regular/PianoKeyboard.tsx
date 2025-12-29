import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PianoKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-14,2h14c1.654,0,3,1.346,3,3v4H2v-4c0-1.654,1.346-3,3-3Zm14,16H5c-1.654,0-3-1.346-3-3v-4h3v3c0,.552.448,1,1,1s1-.448,1-1v-3h2v3c0,.552.448,1,1,1s1-.448,1-1v-3h2v3c0,.552.448,1,1,1s1-.448,1-1v-3h2v3c0,.552.448,1,1,1s1-.448,1-1v-3h3v4c0,1.654-1.346,3-3,3Z"/>
</svg>

);
