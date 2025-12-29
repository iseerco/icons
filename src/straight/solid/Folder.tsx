import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Folder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6.88V6a3,3,0,0,0-3-3H12.236l-4-2H3A3,3,0,0,0,0,4V7Z"/><polygon points="0 8.995 0 23 24 23 24 8.88 0 8.995"/></svg>

);
