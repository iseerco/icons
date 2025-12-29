import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Coffee = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,5a3,3,0,0,0-3-3h-.171A3.006,3.006,0,0,0,17,0H7A3.006,3.006,0,0,0,4.171,2H4A3,3,0,0,0,1,5V8H2.117l2,16H19.883l2-16H23ZM3,5A1,1,0,0,1,4,4H6V3A1,1,0,0,1,7,2H17a1,1,0,0,1,1,1V4h2a1,1,0,0,1,1,1V6H3ZM5.883,22l-.75-6H8.081c.892,5.287,6.948,5.284,7.838,0h2.948l-.75,6ZM10,15c.105-3.954,3.895-3.953,4,0C13.9,18.954,10.105,18.953,10,15Zm9.117-1h-3.2c-.892-5.287-6.947-5.284-7.838,0h-3.2l-.75-6H19.867Z"/></svg>

);
