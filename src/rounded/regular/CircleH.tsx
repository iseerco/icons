import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.039.019C5.422.019.039,5.402.039,12.019s5.383,12,12,12,12-5.384,12-12S18.655.019,12.039.019Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.019,12.039,2.019s10,4.486,10,10-4.486,10-10,10Zm5-14.75v9.5c0,.553-.448,1-1,1s-1-.447-1-1v-3.75h-6v3.75c0,.553-.448,1-1,1s-1-.447-1-1V7.269c0-.552.448-1,1-1s1,.448,1,1v3.75h6v-3.75c0-.552.448-1,1-1s1,.448,1,1Z"/></svg>

);
