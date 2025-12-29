import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMelon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.005,1,18.949-.061-.064,18.947.992,20A13.442,13.442,0,1,0,20.005,1Zm-2.111,16.9a10.464,10.464,0,0,1-13.661.981l3.64-3.64a5.379,5.379,0,0,0,7.361-7.359l3.64-3.639A10.471,10.471,0,0,1,17.894,17.892Z"/></svg>

);
