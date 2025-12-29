import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,12c0,.36-.148,.721-.445,.983l-5.555,5.017v-4.5H0v-3H15V6l5.555,5.017c.297,.262,.445,.623,.445,.983Zm0-9V21h3V3h-3Z"/></svg>

);
