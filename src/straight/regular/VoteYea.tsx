import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VoteYea = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,12h-1V5c0-1.65-1.35-3-3-3H7c-1.65,0-3,1.35-3,3v7h-1c-1.65,0-3,1.35-3,3v7H24v-7c0-1.65-1.35-3-3-3ZM6,5c0-.55,.45-1,1-1h10c.55,0,1,.45,1,1v11H6V5Zm16,15H2v-5c0-.55,.45-1,1-1h1v4H20v-4h1c.55,0,1,.45,1,1v5ZM15.52,6.91l1.41,1.41-3.94,3.94c-.47,.47-1.1,.73-1.77,.73s-1.3-.26-1.77-.73l-1.94-1.94,1.41-1.41,1.94,1.94c.13,.13,.28,.15,.35,.15s.23-.02,.35-.15l3.94-3.94Z"/></svg>

);
