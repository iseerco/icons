import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,21h-6V7h3.587c.811,0,1.218-.994,.644-1.575L12.644,.27c-.356-.36-.932-.36-1.288,0L6.269,5.425c-.574,.581-.167,1.575,.644,1.575h3.587v14H4.5c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h15c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Z"/></svg>

);
