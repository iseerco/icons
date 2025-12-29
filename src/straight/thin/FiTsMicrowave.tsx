import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMicrowave = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4.5c0-1.378-1.122-2.5-2.5-2.5H2.5c-1.378,0-2.5,1.122-2.5,2.5v16.5h3v2h1v-2h16v2h1v-2h3V4.5Zm-1,15.5H1V4.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v15.5Zm-20-2h15V5H3v13Zm1-12h13v11H4V6Zm16-1h1v13h-1V5Z"/>
</svg>

);
