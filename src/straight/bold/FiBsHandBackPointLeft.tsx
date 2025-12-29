import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandBackPointLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.861,2.025c-1.364-1.365-3.585-1.365-4.95,0l-3.975,3.975H4C1.794,6,0,7.794,0,10s1.794,4,4,4h3.829l2,8h14.169l.017-14.603-5.154-5.372Zm2.141,16.975H12.171l-2-8H4c-.551,0-1-.449-1-1s.449-1,1-1h12v-3h-1.821l1.854-1.854c.195-.195,.512-.195,.686-.022l4.296,4.478-.012,10.397Z"/></svg>

);
