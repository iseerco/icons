import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotebookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,24v-3H1v-2H3v-2H1v-2H3v-2H1v-2H3v-2H1v-2H3v-2H1V3H3V0h5V24H3ZM20,0H10V24h10c1.65,0,3-1.35,3-3V3c0-1.65-1.35-3-3-3Z"/></svg>

);
