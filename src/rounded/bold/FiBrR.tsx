import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrR = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.657,14.294C24.829,10.966,22.51,.038,14.5,0H7.5C4.467,0,2,2.468,2,5.5V22.5c.034,1.972,2.967,1.971,3,0v-7.5H14.5c.038,0,.076-.005,.114-.006l4.575,8.234c.405,.731,1.33,.981,2.04,.583,.725-.402,.985-1.315,.583-2.04l-4.154-7.478ZM5,5.5c0-1.379,1.122-2.5,2.5-2.5h7c5.935,.156,5.931,8.846,0,9H5V5.5Z"/></svg>

);
