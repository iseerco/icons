import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.789,7.52c0,.553-.448,1-1,1h-3.75v9c0,.553-.448,1-1,1s-1-.447-1-1v-9h-3.75c-.552,0-1-.447-1-1s.448-1,1-1h9.5c.552,0,1,.447,1,1Zm6.25,4.5c0,6.617-5.383,12-12,12S.039,18.637.039,12.02,5.422.02,12.039.02s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2.039,6.506,2.039,12.02s4.486,10,10,10,10-4.486,10-10Z"/></svg>

);
