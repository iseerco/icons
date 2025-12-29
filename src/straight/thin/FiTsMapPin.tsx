import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMapPin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,3.14,2.425,5.724,5.5,5.979v12.021h1V11.979c3.075-.255,5.5-2.839,5.5-5.979Zm-6,5c-2.757,0-5-2.243-5-5S9.243,1,12,1s5,2.243,5,5-2.243,5-5,5Z"/></svg>

);
