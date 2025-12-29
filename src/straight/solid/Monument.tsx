import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Monument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0v-2H24v2ZM17.354,5c-.084-.655-.384-1.273-.852-1.741L14.122,.879c-1.134-1.134-3.11-1.134-4.243,0l-2.381,2.38c-.468,.468-.768,1.086-.852,1.741h10.707Zm.238,2h-4.592v11h-2V7H6.408l-1.294,11H2v2H22v-2h-3.114l-1.294-11Z"/></svg>

);
