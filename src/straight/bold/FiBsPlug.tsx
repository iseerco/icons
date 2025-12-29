import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,7h-5V0h-3v7h-6V0h-3v7H1v3h2v4.5c0,4.136,3.364,7.5,7.5,7.5v2h3v-2c4.136,0,7.5-3.364,7.5-7.5v-4.5h2v-3Zm-5,7.5c0,2.481-2.019,4.5-4.5,4.5h-3c-2.481,0-4.5-2.019-4.5-4.5v-4.5h12v4.5Z"/>
</svg>

);
