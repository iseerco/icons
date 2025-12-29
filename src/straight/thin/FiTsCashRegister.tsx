import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCashRegister = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,10H7V6h6V2.5c0-1.378-1.121-2.5-2.5-2.5H2.5C1.121,0,0,1.122,0,2.5v3.5H6v4H2.5c-1.379,0-2.5,1.122-2.5,2.5v11.5H24V12.5c0-1.378-1.121-2.5-2.5-2.5ZM1,2.5c0-.827,.673-1.5,1.5-1.5H10.5c.827,0,1.5,.673,1.5,1.5v2.5H1V2.5Zm1.5,8.5H21.5c.827,0,1.5,.673,1.5,1.5v6.5H1v-6.5c0-.827,.673-1.5,1.5-1.5Zm-1.5,12v-3H23v3H1ZM9,15c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm-4,0c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm8,0c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm4,0c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"/></svg>

);
