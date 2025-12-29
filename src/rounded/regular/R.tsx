import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const R = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.379,14.424C24.835,11.256,22.707,.1,14.5,0H7C4.243,0,2,2.243,2,5V23c.006,1.308,1.995,1.307,2,0V15H14.5c.298,0,.591-.022,.881-.056l4.745,8.542c.269,.487,.886,.655,1.359,.389,.483-.269,.657-.877,.389-1.359l-4.495-8.091Zm-13.379-1.424V5c0-1.654,1.346-3,3-3h7.5c7.27,.233,7.265,10.77,0,11H4Z"/></svg>

);
