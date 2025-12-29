import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Coffee = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,6H1V5A3,3,0,0,1,4,2h.171A3.006,3.006,0,0,1,7,0H17a3.006,3.006,0,0,1,2.829,2H20a3,3,0,0,1,3,3ZM10,16c.105,3.954,3.895,3.953,4,0C13.9,12.046,10.105,12.047,10,16ZM8.081,15c.892-5.287,6.948-5.284,7.838,0h5.089l.875-7H2.117l.875,7Zm7.838,2c-.892,5.287-6.947,5.284-7.838,0H3.242l.875,7H19.883l.875-7Z"/></svg>

);
