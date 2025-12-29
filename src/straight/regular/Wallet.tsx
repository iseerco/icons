import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Wallet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,4H24V2H3C1.346,2,0,3.346,0,5v14c0,1.654,1.346,3,3,3H24V6H3c-.552,0-1-.449-1-1s.448-1,1-1Zm0,4H22v12H3c-.552,0-1-.449-1-1V7.829c.312,.111,.649,.171,1,.171Zm15,6c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"/></svg>

);
