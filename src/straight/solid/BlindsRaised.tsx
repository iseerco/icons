import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlindsRaised = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.101,22c.151,.744,.481,1.416,.922,2H0V6H18v4H2v12h14.101Zm5.899-3.816V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v1H18V2h1c.551,0,1,.448,1,1v15.184c-1.161,.414-2,1.514-2,2.816,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.302-.839-2.402-2-2.816Z"/></svg>

);
