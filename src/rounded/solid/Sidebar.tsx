import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sidebar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h4V2ZM4,6h1c.553,0,1,.447,1,1s-.447,1-1,1h-1c-.553,0-1-.447-1-1s.447-1,1-1Zm1,10h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1Zm0-4h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1ZM24,7v10c0,2.757-2.243,5-5,5H11V2h8c2.757,0,5,2.243,5,5Z"/></svg>

);
