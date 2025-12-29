import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Terminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.13,9.89c1.16,1.16,1.16,3.06,0,4.23L1.72,21.7c-.2,.2-.46,.3-.72,.3s-.5-.09-.7-.29c-.4-.39-.4-1.02-.02-1.41l7.41-7.59c.4-.4,.4-1.03,0-1.42L.28,3.7c-.39-.4-.38-1.03,.02-1.41s1.03-.38,1.41,.02l7.41,7.59Zm13.87,10.11H11c-.55,0-1,.45-1,1s.45,1,1,1h12c.55,0,1-.45,1-1s-.45-1-1-1Z"/></svg>

);
