import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SpaceStationMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,22h-4v-5c0-1.105-.895-2-2-2s-2,.895-2,2v5h-4v-7.5c0-2.239.389-4.201,1.073-5.5h9.853c.685,1.299,1.073,3.261,1.073,5.5v7.5Zm3.727-15c-2.181-3.022-5.723-5-9.727-5S4.454,3.978,2.273,7h19.454ZM4,14.5c0-2.117.312-4.004.888-5.5H1.105c-.703,1.524-1.105,3.214-1.105,5v8h4v-7.5Zm15.112-5.5c.575,1.496.888,3.383.888,5.5v7.5h4v-8c0-1.786-.403-3.476-1.105-5h-3.782Z"/></svg>

);
