import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCocktail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.411,1.5A3.411,3.411,0,0,0,20.587,0H3.413A3.409,3.409,0,0,0,.244,4.671,12.576,12.576,0,0,0,10.5,12.45V21H6v3H18V21H13.5V12.45A12.576,12.576,0,0,0,23.756,4.671,3.405,3.405,0,0,0,23.411,1.5ZM12,9.541A9.561,9.561,0,0,1,3.224,4H20.776A9.561,9.561,0,0,1,12,9.541Z"/></svg>

);
