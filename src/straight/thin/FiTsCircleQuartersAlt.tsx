import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCircleQuartersAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm.707,12l7.413-7.413c1.788,1.957,2.88,4.56,2.88,7.413s-1.092,5.456-2.88,7.413l-7.413-7.413Zm6.706-8.12l-7.413,7.413L4.587,3.88c1.957-1.788,4.56-2.88,7.413-2.88s5.456,1.092,7.413,2.88Zm-15.533.707l7.413,7.413-7.413,7.413c-1.788-1.957-2.88-4.56-2.88-7.413s1.092-5.456,2.88-7.413Zm.707,15.533l7.413-7.413,7.413,7.413c-1.957,1.788-4.56,2.88-7.413,2.88s-5.456-1.092-7.413-2.88Z"/></svg>

);
