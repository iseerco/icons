import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Wheelchair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,3a3,3,0,1,1,3,3A3,3,0,0,1,8,3ZM21.721,21l-2-6H13a1,1,0,0,1-1-1V13h7V11H12V8H10v6a3,3,0,0,0,3,3h5.28l2,6H24V21ZM8,14V8a8,8,0,1,0,7.411,11H13A5.006,5.006,0,0,1,8,14Z"/></svg>

);
