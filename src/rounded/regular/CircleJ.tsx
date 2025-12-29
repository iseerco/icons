import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleJ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.038.019C5.421.019.038,5.402.038,12.019s5.383,12,12,12,12-5.384,12-12S18.655.019,12.038.019Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.019,12.038,2.019s10,4.486,10,10-4.486,10-10,10Zm4.75-15v8c0,1.654-1.346,3-3,3h-4c-1.654,0-3-1.346-3-3,0-.553.447-1,1-1s1,.447,1,1,.448,1,1,1h4c.552,0,1-.448,1-1V7.019c0-.552.447-1,1-1s1,.448,1,1Z"/></svg>

);
