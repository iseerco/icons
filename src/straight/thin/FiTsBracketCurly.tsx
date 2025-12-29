import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBracketCurly = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,24h-3.5c-1.38,0-2.5-1.12-2.5-2.5v-6.29l-3.21-3.21,3.21-3.21V2.5c0-1.38,1.12-2.5,2.5-2.5h3.5V1h-3.5c-.83,0-1.5,.67-1.5,1.5v6.71l-2.79,2.79,2.79,2.79v6.71c0,.83,.67,1.5,1.5,1.5h3.5v1Z"/></svg>

);
