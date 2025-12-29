import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GolfClub = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.033.014a.994.994,0,0,0-1.152.821L20.01,11.98,7.236,9.291A6,6,0,0,0,0,15.162V18a6.006,6.006,0,0,0,6,6h6.014a9.518,9.518,0,0,0,8.715-5.687A9.335,9.335,0,0,0,21.4,15.8L23.854,1.166A1,1,0,0,0,23.033.014ZM10.979,19.486a1,1,0,0,1-.978.793.987.987,0,0,1-.208-.022L4.83,19.207a1,1,0,0,1,.414-1.957l4.963,1.05A1,1,0,0,1,10.979,19.486Zm4.515-3.223a1,1,0,0,1-.977.795,1.029,1.029,0,0,1-.206-.021L5.8,15.252A1,1,0,1,1,6.21,13.3l8.511,1.785A1,1,0,0,1,15.494,16.263Z"/></svg>

);
