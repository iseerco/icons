import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDoorClosed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,21h-1.5V5.5c0-3.033-2.468-5.5-5.5-5.5h-7C5.468,0,3,2.467,3,5.5v15.5H1.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5H22.5c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5ZM6,5.5c0-1.378,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.122,2.5,2.5v15.5H6V5.5Zm10,7c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);
