import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AuditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,0H1v24h14V0Zm-3,11H4v-2h8v2ZM3,7v-2h10v2H3Zm20,8.764v5.236c0,1.654-1.346,3-3,3h-3V0h1c1.654,0,3,1.346,3,3v8.764l2,4Z"/>
</svg>

);
