import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceViewfinder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,24H2.5c-1.379,0-2.5-1.122-2.5-2.5v-5.5h3v5h5v3Zm16-2.5v-5.5h-3v5h-5v3h5.5c1.379,0,2.5-1.122,2.5-2.5Zm0-19c0-1.378-1.121-2.5-2.5-2.5h-5.5v3h5v5h3V2.5ZM3,3h5V0H2.5C1.121,0,0,1.122,0,2.5v5.5h3V3Zm16,9c0,3.866-3.134,7-7,7s-7-3.134-7-7,3.134-7,7-7,7,3.134,7,7Zm-9.5,0c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm6.055,2.832l-1.109-1.664c-.013.008-1.28.832-2.445.832-.971,0-2.096-.602-2.447-.833l-1.107,1.666c.18.12,1.803,1.168,3.555,1.168s3.375-1.048,3.555-1.168Zm.445-4.332c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/>
</svg>

);
