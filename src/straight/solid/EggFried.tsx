import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EggFried = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.716,5.114A9.994,9.994,0,0,0,0,10v1A13.015,13.015,0,0,0,13,24a8.026,8.026,0,0,0,7.981-7.015A6.5,6.5,0,0,0,18.716,5.114ZM12,20a1,1,0,1,1,1-1A1,1,0,0,1,12,20ZM9.5,16A5.5,5.5,0,1,1,15,10.5,5.506,5.506,0,0,1,9.5,16ZM15,18a1,1,0,1,1,1-1A1,1,0,0,1,15,18Zm4-6a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6-1.5A3.5,3.5,0,1,1,9.5,7,3.5,3.5,0,0,1,13,10.5Z"/></svg>

);
