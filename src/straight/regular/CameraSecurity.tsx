import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraSecurity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,3c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v17h5.534c-.695.773-1.195,1.73-1.414,2.8l-.244,1.2h12.247l-.244-1.2c-.218-1.07-.719-2.027-1.414-2.8h5.534V3Zm-6.537,19h-6.927c.701-1.207,2.01-2,3.463-2s2.763.793,3.463,2Zm4.537-4H4V3c0-.551.449-1,1-1h14c.551,0,1,.449,1,1v15ZM12,5c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,8c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/></svg>

);
