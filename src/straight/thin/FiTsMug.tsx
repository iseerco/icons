import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8.5c0-1.378-1.121-2.5-2.5-2.5h-2.5V2h2V1H0v1H2V20.5c0,1.378,1.122,2.5,2.5,2.5h12c1.379,0,2.5-1.122,2.5-2.5v-4.5h5v-7.5Zm-7.5,13.5H4.5c-.827,0-1.5-.673-1.5-1.5V7h13v-1H3V2h15V20.5c0,.827-.673,1.5-1.5,1.5Zm6.5-7h-4V7h2.5c.827,0,1.5,.673,1.5,1.5v6.5Z"/></svg>

);
