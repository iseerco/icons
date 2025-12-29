import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.038.02C5.421.02.038,5.402.038,12.02s5.383,12,12,12,12-5.383,12-12S18.655.02,12.038.02Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.02,12.038,2.02s10,4.486,10,10-4.486,10-10,10Zm-2.979-6.213c.047.142.14.213.276.213h6.702c.553,0,1,.447,1,1s-.447,1-1,1h-6.702c-1.001,0-1.854-.62-2.174-1.58-.326-.977-.009-2.003.808-2.615l6.937-5.209c.166-.125.142-.293.111-.382-.047-.142-.14-.214-.276-.214h-6.703c-.553,0-1-.447-1-1s.447-1,1-1h6.703c1,0,1.854.62,2.174,1.581.325.976.008,2.002-.808,2.614l-6.937,5.209c-.167.125-.142.293-.111.383Z"/></svg>

);
