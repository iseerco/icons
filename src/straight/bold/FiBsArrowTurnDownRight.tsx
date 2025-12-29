import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowTurnDownRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.29,12.71l-5.68-6.22-2.22,2.02,4.1,4.49H3.5c-.28,0-.5-.22-.5-.5V2H0V12.5c0,1.93,1.57,3.5,3.5,3.5h15.99l-4.1,4.49,2.22,2.02,5.63-6.17c1.01-1.01,1.01-2.67,.05-3.63Z"/></svg>

);
