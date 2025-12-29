import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GarageOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.681l-9-7.044a3,3,0,0,0-3.7,0l-9,7.042A2.985,2.985,0,0,0,0,10.043V24H6V16H18v8h6V10.043A2.981,2.981,0,0,0,22.849,7.681ZM6,14V13a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v1Zm16,8H20V13a3,3,0,0,0-3-3H7a3,3,0,0,0-3,3v9H2V10.043a.994.994,0,0,1,.384-.788l9-7.042a1,1,0,0,1,1.232,0l9,7.044a.991.991,0,0,1,.384.787Z"/></svg>

);
