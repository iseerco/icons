import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSubscript = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,13v11h-1v-9.354l-1.916,1.978-.719-.695,2.836-2.928h.799ZM13.45,0l-5.937,8.154L1.47,0H.231l6.661,9L.231,18h1.24l6.042-8.155,5.937,8.155h1.242l-6.559-9L14.692,0h-1.242Z"/></svg>

);
