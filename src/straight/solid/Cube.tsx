import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>19-cube</title><polygon points="12.002 11.037 21.756 5.575 12 0 2.275 5.557 12.002 11.037"/><polygon points="13 12.769 13 24 13.027 24 22.757 18.44 22.757 7.305 13 12.769"/><polygon points="11 12.768 1.243 7.271 1.243 18.44 10.973 24 11 24 11 12.768"/></svg>

);
