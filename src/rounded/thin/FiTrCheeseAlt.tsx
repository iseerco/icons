import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCheeseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,16c0,1.69,.31,3.4,.94,5.09,.64,1.74,2.33,2.91,4.21,2.91h14.35c2.48,0,4.5-2.02,4.5-4.5V11.08c0-1.78-.87-3.46-2.32-4.49L13.52,.81c-1.67-1.12-3.84-1.08-5.4,.09C2.67,4.98,1.05,10.53,.98,10.77,.98,10.78,0,13,0,16ZM21.78,8H5.15c-.77,0-1.5,.19-2.14,.54,.99-1.93,2.77-4.63,5.72-6.83,1.22-.92,2.93-.94,4.24-.07l8.15,5.78c.25,.17,.47,.37,.67,.59ZM1,16c0-1.57,.29-3.17,.87-4.75,.49-1.35,1.81-2.25,3.27-2.25H22.49c.33,.63,.51,1.35,.51,2.08v8.42c0,1.93-1.57,3.5-3.5,3.5H5.15c-1.46,0-2.78-.9-3.27-2.25-.58-1.58-.88-3.18-.88-4.75Z"/></svg>

);
