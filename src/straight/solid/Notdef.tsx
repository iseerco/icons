import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Notdef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.72,.3c.39-.18,.82-.3,1.28-.3h12c.46,0,.89,.11,1.28,.3l-7.28,10L4.72,.3Zm6.04,11.7L3.29,1.73c-.18,.39-.29,.82-.29,1.27V22.68l7.76-10.67Zm10.24,10.67V3c0-.46-.11-.88-.29-1.27l-7.47,10.27,7.76,10.67ZM12,13.7l-7.49,10.3h14.98l-7.49-10.3Z"/></svg>

);
