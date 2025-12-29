import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.293,15.207,12,9.914,6.707,15.207,5.293,13.793,10.586,8.5a2,2,0,0,1,2.828,0l5.293,5.293Z"/></svg>

);
