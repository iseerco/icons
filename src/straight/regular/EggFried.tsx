import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EggFried = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,16A5.5,5.5,0,1,1,15,10.5,5.506,5.506,0,0,1,9.5,16Zm0-9A3.5,3.5,0,1,0,13,10.5,3.5,3.5,0,0,0,9.5,7ZM13,24A13.015,13.015,0,0,1,0,11V10A9.994,9.994,0,0,1,18.716,5.114a6.5,6.5,0,0,1,2.265,11.871A8.026,8.026,0,0,1,13,24ZM10,2a8.009,8.009,0,0,0-8,8v1A11.013,11.013,0,0,0,13,22c3.2,0,6-2.57,6-5.5l0-.715.545-.278a4.5,4.5,0,0,0-1.574-8.483l-.551-.056-.244-.5A7.952,7.952,0,0,0,10,2Zm2,16a1,1,0,1,0,1,1A1,1,0,0,0,12,18Zm7-8a1,1,0,1,0,1,1A1,1,0,0,0,19,10Zm-4,6a1,1,0,1,0,1,1A1,1,0,0,0,15,16Z"/></svg>

);
