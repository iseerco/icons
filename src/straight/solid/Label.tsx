import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Label = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0,2,5.522V21a3,3,0,0,0,3,3H19a3.009,3.009,0,0,0,3-3V5.522Zm0,8.5A1.5,1.5,0,1,1,13.5,7,1.5,1.5,0,0,1,12,8.5Z"/></svg>

);
