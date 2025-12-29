import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Edit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.828,20H4V14.172l.586-.586L18.172,0H3A3,3,0,0,0,0,3V24H17V17h7V5.828Z"/><polygon points="19 23.414 23.414 19 19 19 19 23.414"/><path d="M6,18H9L23.379,3.621a2.121,2.121,0,0,0-3-3L6,15Z"/></svg>

);
