import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChild = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,10c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.122,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm4,7.5c0-1.379-1.122-2.5-2.5-2.5h-3c-1.378,0-2.5,1.121-2.5,2.5v6.5h2v4h1v-4h2v4h1v-4h2v-6.5Zm-1,5.5h-6v-5.5c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v5.5Z"/>
</svg>

);
