import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWalker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,19.051V2.5c0-1.379-1.121-2.5-2.5-2.5h-9.101c-1.046,0-1.99.66-2.349,1.644L.03,23.632l.939.342,4.732-12.974h15.298v8.051c-1.14.232-2,1.242-2,2.449,0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5c0-1.208-.86-2.217-2-2.449ZM6.067,10L8.99,1.986c.215-.59.781-.986,1.409-.986h9.101c.827,0,1.5.673,1.5,1.5v7.5H6.067Zm15.433,13c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/></svg>

);
