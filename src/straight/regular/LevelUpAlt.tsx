import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LevelUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,6V21a3,3,0,0,1-3,3H0V22H10a1,1,0,0,0,1-1V6H5.921L11,.445A1.338,1.338,0,0,1,13,.445L18.079,6Z"/></svg>

);
