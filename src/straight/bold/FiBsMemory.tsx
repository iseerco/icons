import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMemory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,2,0,3.57,0,5.5V22H4v-3h3v3h3.5v-3h3v3h3.5v-3h3v3h4V5.5ZM3,16v-3h0s2-.58,2-2.5-2-2.5-2-2.5h0v-2.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v2.5s-2,.58-2,2.5,2,2.5,2,2.5v3H3ZM7,7h3v7h-3V7Zm7,0h3v7h-3V7Z"/></svg>

);
