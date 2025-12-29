import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Windsock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9.18,4.843,5.349A3,3,0,1,0,2,5.816V24H4V19.82l20-4ZM12,8.82l2,.4v6.56l-2,.4Zm-2,7.76-2,.4V8.02l2,.4Zm6-6.96,2,.4v4.96l-2,.4ZM3,2A1,1,0,1,1,2,3,1,1,0,0,1,3,2ZM4,7.22l2,.4v9.76l-2,.4Zm18,6.96-2,.4V10.42l2,.4Z"/></svg>

);
