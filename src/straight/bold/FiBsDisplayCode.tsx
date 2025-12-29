import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDisplayCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.271,7.74c.97,.971,.97,2.549,0,3.519l-3.3,3.3-2.121-2.121,2.938-2.938-2.938-2.938,2.121-2.121,3.299,3.299Zm-9.243-3.299l-3.3,3.3c-.969,.97-.969,2.548,0,3.519l3.299,3.299,2.121-2.121-2.938-2.938,2.938-2.938-2.121-2.121Zm4.472,14.559v2h4.5v3H6v-3h4.5v-2H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5v15.5H13.5Zm-10.5-3H21V3.5c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5,.225-.5,.5v12.5Z"/></svg>

);
