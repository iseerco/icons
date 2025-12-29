import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.039.019C5.422.019.039,5.402.039,12.019s5.383,12,12,12,12-5.384,12-12S18.655.019,12.039.019Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.019,12.039,2.019s10,4.486,10,10-4.486,10-10,10Zm5-15c0,.552-.448,1-1,1h-6c-.551,0-1,.449-1,1v3h5c.552,0,1,.448,1,1s-.448,1-1,1h-5v3c0,.553-.448,1-1,1s-1-.447-1-1v-8c0-1.654,1.346-3,3-3h6c.552,0,1,.448,1,1Z"/></svg>

);
