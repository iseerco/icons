import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBracketsRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.34,21.66l-1.92,2.31c-.22-.18-5.43-4.58-5.43-11.96S5.21,.22,5.43,.04l1.91,2.31S3,6.06,3,12s4.3,9.62,4.34,9.66ZM24,12c0,7.39-5.21,11.78-5.43,11.96l-1.92-2.31s4.34-3.71,4.34-9.66S16.7,2.38,16.66,2.34L18.57,.04c.22,.18,5.43,4.58,5.43,11.96Z"/></svg>

);
