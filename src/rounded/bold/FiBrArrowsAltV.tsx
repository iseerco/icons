import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowsAltV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.087,16.923h-3.587V6.923h3.587c.811,0,1.218-.994,.644-1.575L12.644,.193c-.356-.36-.932-.36-1.288,0L6.269,5.348c-.574,.581-.167,1.575,.644,1.575h3.587v10h-3.587c-.811,0-1.218,.994-.644,1.575l5.087,5.154c.356,.36,.932,.36,1.288,0l5.087-5.154c.574-.581,.167-1.575-.644-1.575Z"/></svg>

);
