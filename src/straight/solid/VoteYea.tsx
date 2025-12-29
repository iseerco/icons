import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VoteYea = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,2H8c-1.65,0-3,1.35-3,3v12h14V5c0-1.65-1.35-3-3-3Zm-3,10.27c-.47,.47-1.1,.73-1.77,.73s-1.3-.26-1.77-.73l-1.94-1.94,1.41-1.41,1.94,1.94c.13,.13,.28,.15,.35,.15s.23-.02,.35-.15l3.94-3.94,1.41,1.41-3.94,3.94Zm11,2.73v7H0v-7c0-1.65,1.35-3,3-3v7H21v-7c1.65,0,3,1.35,3,3Z"/></svg>

);
