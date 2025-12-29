import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V10.043c0-.929,.42-1.79,1.151-2.363L10.151,.638c1.088-.854,2.609-.854,3.697,0l9,7.043c.731,.572,1.151,1.434,1.151,2.362v13.957ZM2,22H22V10.043c0-.31-.14-.597-.384-.787L12.616,2.212c-.363-.283-.869-.283-1.232,0L2.384,9.255c-.244,.191-.384,.479-.384,.788v11.957Z"/></svg>

);
