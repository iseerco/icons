import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlugCable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,9c-3.032,0-5.5,2.468-5.5,5.5v3c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-2.523c2.799-.254,5-2.613,5-5.477v-2.5h1v-3h-3V0h-3v4h-3V0h-3v4H0v3h1v2.5c0,2.864,2.201,5.224,5,5.477v2.523c0,3.584,2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5v-3c0-1.379,1.121-2.5,2.5-2.5h2.5v-3h-2.5Zm-17.5.5v-2.5h7v2.5c0,1.379-1.121,2.5-2.5,2.5h-2c-1.379,0-2.5-1.121-2.5-2.5Z"/>
</svg>

);
