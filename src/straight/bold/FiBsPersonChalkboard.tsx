import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonChalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,3.5V15H11v-3h10V3.5c0-.275-.225-.5-.5-.5H9.95c.019-.166,.05-.329,.05-.5,0-.925-.281-1.785-.76-2.5h11.26c1.93,0,3.5,1.57,3.5,3.5ZM6,15H3v-5.5c0-.275,.225-.5,.5-.5H15v-3H3.5c-1.93,0-3.5,1.57-3.5,3.5v8.5H2v6h3v-6h1v6h3V11h-3v4Zm-.5-10c1.381,0,2.5-1.119,2.5-2.5S6.881,0,5.5,0,3,1.119,3,2.5s1.119,2.5,2.5,2.5Z"/>
</svg>

);
