import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0H4.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h6v14h-3.587c-.811,0-1.218,.994-.644,1.575l5.087,5.154c.356,.36,.932,.36,1.288,0l5.087-5.154c.574-.581,.167-1.575-.644-1.575h-3.587V3h6c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5Z"/></svg>

);
