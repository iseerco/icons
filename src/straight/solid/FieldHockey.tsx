import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FieldHockey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.957,8.8,19.744.009,24,2.632,18.125,11.56Zm-1.1,1.671L7.7,18.306a1.46,1.46,0,1,1-2.486-1.533A2.5,2.5,0,0,0,.958,14.151a6.46,6.46,0,0,0,11,6.784l5.071-7.7ZM24,20.5A3.5,3.5,0,1,0,20.5,24,3.5,3.5,0,0,0,24,20.5Z"/></svg>

);
