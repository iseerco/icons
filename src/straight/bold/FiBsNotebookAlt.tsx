import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNotebookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0H3V3H1v3H3v2H1v3H3v2H1v3H3v2H1v3H3v3H19.5c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5ZM6,3h2V21h-2V3Zm14,17.5c0,.28-.22,.5-.5,.5H11V3h8.5c.28,0,.5,.22,.5,.5V20.5Z"/></svg>

);
