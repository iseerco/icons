import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrI = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,21h-4V3h4c1.972-.034,1.971-2.967,0-3H6.5c-1.972,.034-1.971,2.967,0,3h4V21H6.5c-1.972,.034-1.971,2.967,0,3h11c1.972-.034,1.971-2.967,0-3Z"/></svg>

);
