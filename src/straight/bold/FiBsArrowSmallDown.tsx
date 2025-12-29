import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.939,12.354,13.5,14.793V6h-3v8.793L8.061,12.354,5.939,14.475l4.293,4.293a2.5,2.5,0,0,0,3.536,0l4.293-4.293Z"/></svg>

);
