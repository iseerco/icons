import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltSquareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,11h-3.5v7h-3v-7h-3.632l4.236-4.629c.443-.494,1.217-.494,1.66,0l4.236,4.629Zm7-7.5V24H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5,.224-.5,.5V21H21V3.5Z"/></svg>

);
