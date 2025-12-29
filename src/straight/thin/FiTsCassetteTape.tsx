import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCassetteTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,3H2.5c-1.38,0-2.5,1.12-2.5,2.5v15.5H24V5.5c0-1.38-1.12-2.5-2.5-2.5ZM5.93,20l1.33-2h9.46l1.33,2H5.93Zm17.07,0h-3.73l-2-3H6.73l-2,3H1V5.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5v14.5Zm-6-12H7c-1.65,0-3,1.35-3,3s1.35,3,3,3h10c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm-2.23,1c-.48,.53-.77,1.23-.77,2s.29,1.47,.77,2h-5.53c.48-.53,.77-1.23,.77-2s-.29-1.47-.77-2h5.53Zm-9.77,2c0-1.1,.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Zm12,2c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/></svg>

);
