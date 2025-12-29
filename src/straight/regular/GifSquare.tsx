import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GifSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2H3c-1.654,0-3,1.346-3,3v17h24V5c0-1.654-1.346-3-3-3Zm1,18H2V5c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v15ZM11,7h2v10h-2V7Zm3,0h6v2h-4v2h2v2h-2v4h-2V7Zm-8,3v4c0,.551.448,1,1,1s1-.449,1-1h-1v-2h3v2c0,1.654-1.346,3-3,3s-3-1.346-3-3v-4c0-1.654,1.346-3,3-3s3,1.346,3,3h-2c0-.551-.448-1-1-1s-1,.449-1,1Z"/>
</svg>

);
