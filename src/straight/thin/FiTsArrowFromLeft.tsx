import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.561,10.939l-5.793-5.793-.707,.707,5.646,5.646H1V5H0v14H1v-6.5H22.708l-5.646,5.646,.707,.707,5.793-5.793c.275-.276,.431-.643,.438-1.032,.007-.411-.148-.797-.439-1.089Z"/></svg>

);
