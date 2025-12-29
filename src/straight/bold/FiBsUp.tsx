import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,24H7V11H-.01L9.67,.97C10.29,.35,11.12,0,12,0h0c.88,0,1.71,.34,2.33,.97l9.7,10.03h-7.04v13Zm-7-3h4V8h2.96L12.19,3.07c-.06-.06-.14-.07-.19-.07h0c-.05,0-.13,.01-.2,.08l-4.75,4.92h2.95v13Z"/></svg>

);
