import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUx = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,0H2.5C1.121,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM11,7h1v6c0,2.206-1.794,4-4,4s-4-1.794-4-4v-6h1v6c0,1.654,1.346,3,3,3s3-1.346,3-3v-6Zm9,0l-2.67,5,2.67,5h-1.159l-2.091-3.915-2.091,3.915h-1.159l2.67-5-2.67-5h1.159l2.091,3.915,2.091-3.915h1.159Z"/>
</svg>

);
