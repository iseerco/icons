import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleL = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.038.019C5.421.019.038,5.402.038,12.019s5.383,12,12,12,12-5.384,12-12S18.655.019,12.038.019Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.019,12.038,2.019s10,4.486,10,10-4.486,10-10,10Zm5-5c0,.553-.447,1-1,1h-6c-1.654,0-3-1.346-3-3V7.019c0-.552.447-1,1-1s1,.448,1,1v8c0,.552.448,1,1,1h6c.553,0,1,.447,1,1Z"/></svg>

);
