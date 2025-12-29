import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsThursday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,2h-3.5V0h-1v2H7V0h-1v2h-3.5c-1.378,0-2.5,1.121-2.5,2.5v19.5h7v-1H1v-14h22v5h1V4.5c0-1.379-1.122-2.5-2.5-2.5ZM1,8v-3.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v3.5H1Zm22,8h1v5.5c0,1.379-1.122,2.5-2.5,2.5s-2.5-1.121-2.5-2.5v-5.5h1v5.5c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-5.5Zm-6,0h1v8h-1v-3.5h-3v3.5h-1v-8h1v3.5h3v-3.5Zm-10,0h5v1h-2v7h-1v-7h-2v-1Z"/>
</svg>

);
