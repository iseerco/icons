import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7.942,20c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5h4.885ZM12,1H3C1.346,1,0,2.346,0,4v5h8.036l-2.518-2.518,1.414-1.414,3.518,3.518c.78.78.78,2.048,0,2.828l-3.518,3.518-1.414-1.414,2.518-2.518H0v7h15V4c0-1.654-1.346-3-3-3Zm5,17h7v-5h-7v5Zm.058,2c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5h-4.885Zm1.942-15h-2v6h7v-1c0-2.757-2.243-5-5-5Z"/>
</svg>

);
