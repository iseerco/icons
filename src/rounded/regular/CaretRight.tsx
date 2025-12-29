import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z"/></svg>

);
