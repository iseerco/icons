import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGifSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,2H2.5c-1.379,0-2.5,1.122-2.5,2.5v17.5h24V4.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,19H1V4.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v16.5ZM12,7h1v10h-1V7Zm3,0h5v1h-4v3h3v1h-3v5h-1V7Zm-10,3v4c0,1.103.897,2,2,2s2-.897,2-2v-1h-2v-1h3v2c0,1.654-1.346,3-3,3s-3-1.346-3-3v-4c0-1.654,1.346-3,3-3s3,1.346,3,3h-1c0-1.103-.897-2-2-2s-2,.897-2,2Z"/>
</svg>

);
