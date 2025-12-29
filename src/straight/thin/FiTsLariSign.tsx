import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLariSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,23h11v1H1v-1H7.42c-3.79-1.74-6.42-5.57-6.42-10C1,7.97,4.39,3.72,9,2.42V0h1V2.18c.65-.12,1.32-.18,2-.18s1.35,.06,2,.18V0h1V2.42c4.61,1.31,8,5.56,8,10.58h-1c0-4.47-2.95-8.26-7-9.54V12h-1V3.2c-.65-.13-1.32-.2-2-.2s-1.35,.07-2,.2V12h-1V3.46c-4.05,1.28-7,5.07-7,9.54,0,5.51,4.49,10,10,10Z"/></svg>

);
