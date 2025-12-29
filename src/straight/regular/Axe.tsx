import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Axe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.998,5.946l-1.06.064c-.706.042-2.615-.034-3.743-.791l2.006-2.006-1.414-1.414-2.037,2.037L14.091.162l-5.921,5.921,3.659,3.674L.049,21.537l1.414,1.414,11.744-11.744c.749,1.12.838,3.028.802,3.741l-.054,1.053h1.053c5.294,0,8.992-3.698,8.992-8.992l-.002-1.062Zm-8.003,8c-.077-1.254-.408-3.255-1.661-4.508l-3.339-3.353,3.093-3.093,3.336,3.35h.001c1.265,1.267,3.263,1.59,4.519,1.661-.375,3.308-2.64,5.57-5.95,5.943Z"/>
</svg>

);
