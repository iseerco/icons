import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Eyes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.5,0C2.462,0,0,5.373,0,12s2.462,12,5.5,12,5.5-5.373,5.5-12S8.538,0,5.5,0Zm-1,17c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5ZM18.5,0c-3.038,0-5.5,5.373-5.5,12s2.462,12,5.5,12,5.5-5.373,5.5-12S21.538,0,18.5,0Zm-1,17c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Z"/></svg>

);
