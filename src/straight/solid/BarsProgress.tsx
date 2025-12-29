import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BarsProgress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H3c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3v-2c0-1.654-1.346-3-3-3Zm1,5c0,.552-.448,1-1,1h-5V5h5c.552,0,1,.448,1,1v2Zm-1,5H3c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3v-2c0-1.654-1.346-3-3-3Zm1,5c0,.552-.448,1-1,1H10v-4h11c.552,0,1,.448,1,1v2Z"/></svg>

);
