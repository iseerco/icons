import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDisplayMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,19V4.5c0-1.378-1.122-2.5-2.5-2.5H2.5c-1.378,0-2.5,1.122-2.5,2.5v14.5h11.5v2h-4.5v1h10v-1h-4.5v-2h11.5ZM1,4.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v13.5H1V4.5Zm11.5,5.5h4v1h-4v4h-1v-4h-4v-1h4v-4h1v4Z"/>
</svg>

);
