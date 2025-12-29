import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,13h3.5l-4.236,4.629c-.443,.494-1.217,.494-1.66,0l-4.236-4.629h3.632V6h3v7ZM24,3.5V24H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21H21V3.5Z"/></svg>

);
