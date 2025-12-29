import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTheta = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C7.038,0,3,5.383,3,12s4.038,12,9,12,9-5.383,9-12S16.962,0,12,0Zm0,3c2.912,0,5.413,3.307,5.906,7.5H6.094c.493-4.193,2.994-7.5,5.906-7.5Zm0,18c-2.912,0-5.413-3.307-5.906-7.5h11.812c-.493,4.193-2.994,7.5-5.906,7.5Z"/></svg>

);
