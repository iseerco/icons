import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Wheelchair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.721,21l-2-6H13a1,1,0,0,1-1-1V13h7V11H12V7.858a4,4,0,1,0-2,0V14a3,3,0,0,0,3,3h.91A6,6,0,1,1,8,10V8a8,8,0,1,0,7.931,9h2.348l2,6H24V21ZM9,4a2,2,0,1,1,2,2A2,2,0,0,1,9,4Z"/></svg>

);
