import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,0v7.5h3.5v2.5h-5l-1.8-2.4c-.753-1.001-1.949-1.6-3.2-1.6h-3.5c-1.654,0-3,1.346-3,3v8h2v7h2v-7h2v7h2v-15.305c.032.037.071.066.101.106l2.399,3.2h8v-4.5h3.5V0h-9ZM4.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Z"/>
</svg>

);
