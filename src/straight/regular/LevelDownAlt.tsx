import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LevelDownAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,18V3a3,3,0,0,0-3-3H0V2H10a1,1,0,0,1,1,1V18H5.921L11,23.555a1.338,1.338,0,0,0,1.992,0L18.079,18Z"/></svg>

);
