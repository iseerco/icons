import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleQuartersAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm0,1c2.853,0,5.456,1.092,7.413,2.88l-7.413,7.413L4.587,3.88c1.957-1.788,4.56-2.88,7.413-2.88ZM1,12c0-2.853,1.092-5.456,2.88-7.413l7.413,7.413-7.413,7.413c-1.788-1.957-2.88-4.56-2.88-7.413Zm11,11c-2.853,0-5.456-1.092-7.413-2.88l7.413-7.413,7.413,7.413c-1.957,1.788-4.56,2.88-7.413,2.88Zm8.12-3.587l-7.413-7.413,7.413-7.413c1.788,1.957,2.88,4.56,2.88,7.413s-1.092,5.456-2.88,7.413Z"/></svg>

);
