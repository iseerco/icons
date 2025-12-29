import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBringForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,16H0V3.5C0,1.57,1.57,0,3.5,0H12.5c1.93,0,3.5,1.57,3.5,3.5v12.5ZM3,13H13V3.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5V13Zm21-1.5c0-1.93-1.57-3.5-3.5-3.5h-2.5v3h2.5c.28,0,.5,.22,.5,.5v9.5H11v-3h-3v6H24V11.5Z"/></svg>

);
