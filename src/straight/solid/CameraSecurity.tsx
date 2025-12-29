import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraSecurity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,10c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Zm7,10h-5.698c.719.771,1.238,1.738,1.459,2.824l.239,1.176H6l.239-1.176c.221-1.086.74-2.054,1.459-2.824H2V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v17Zm-5-10c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Z"/></svg>

);
