import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExpandArrowsAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.718,4.7,24,8V1a1,1,0,0,0-1-1H16.048l3.261,3.28L11.986,10.6l-7.3-7.3L8,0H1A1,1,0,0,0,0,1V7.952L3.263,4.708l7.309,7.309L3.285,19.3,0,16v7a1,1,0,0,0,1,1H7.952L4.694,20.723l7.292-7.292,7.3,7.3L16,24h7a1,1,0,0,0,1-1V16.048l-3.294,3.274-7.306-7.3Z"/></svg>

);
