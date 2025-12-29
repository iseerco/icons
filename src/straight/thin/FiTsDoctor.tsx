import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDoctor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,5h-5.5V1h-8v4H2.5c-1.379,0-2.5,1.122-2.5,2.5v15.5h24V7.5c0-1.378-1.121-2.5-2.5-2.5Zm-12.5-3h6v3h-6v-3Zm14,20H1V7.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v14.5Zm-10.5-8.5h3.5v1h-3.5v3.5h-1v-3.5h-3.5v-1h3.5v-3.5h1v3.5Z"/>
</svg>

);
