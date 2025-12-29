import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLuggageCart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,19c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5Zm8.5,2.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5ZM6,15.5V3.5c0-1.93-1.57-3.5-3.5-3.5H0V3H2.5c.275,0,.5,.224,.5,.5V15.5c0,1.93,1.57,3.5,3.5,3.5H24v-3H6.5c-.275,0-.5-.224-.5-.5ZM24,6V14H8V6c0-1.654,1.346-3,3-3h1v-.5c0-1.378,1.121-2.5,2.5-2.5h3c1.379,0,2.5,1.122,2.5,2.5v.5h1c1.654,0,3,1.346,3,3Zm-3,0H11v5h10V6Z"/></svg>

);
