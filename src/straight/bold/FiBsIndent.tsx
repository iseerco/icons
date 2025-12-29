import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIndent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect y="3" width="24" height="3"/><rect x="8" y="8" width="16" height="3"/><rect y="18" width="24" height="3"/><rect x="8" y="13" width="16" height="3"/><path d="M0,7V17l5.078-4.232a1,1,0,0,0,0-1.536Z"/></svg>

);
