import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleK = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.038.019C5.421.019.038,5.402.038,12.019s5.383,12,12,12,12-5.384,12-12S18.655.019,12.038.019Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.019,12.038,2.019s10,4.486,10,10-4.486,10-10,10Zm4.781-14.376l-3.501,4.375,3.501,4.375c.345.432.274,1.061-.156,1.406-.185.147-.405.219-.624.219-.294,0-.584-.129-.782-.375l-3.699-4.625h-2.519v4c0,.553-.447,1-1,1s-1-.447-1-1V7.019c0-.552.447-1,1-1s1,.448,1,1v4h2.519l3.7-4.625c.346-.43.974-.501,1.406-.156.431.345.501.974.156,1.405Z"/></svg>

);
