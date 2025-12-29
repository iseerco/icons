import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWednesday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.997,16h1.003l-.508,7c-.043.705-.472,1-.988,1-.342,0-.66-.242-.841-.64l-1.164-2.56-1.164,2.56c-.181.398-.499.64-.841.64-.516,0-.945-.295-.988-1l-.508-7h1.003l.493,6.794,2.005-4.41,2.005,4.41.493-6.794Zm12.003-11.5v9.5h-1v-5H1v14h3.503l.009.122c.019.314.089.603.182.878H0V4.5c0-1.378,1.121-2.5,2.5-2.5h3.5V0h1v2h10V0h1v2h3.5c1.379,0,2.5,1.122,2.5,2.5Zm-1,3.5v-3.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v3.5h22Zm-9,16h4v-1h-3v-2.5h3v-1h-3v-2.5h3v-1h-4v8Zm10-5.5v3c0,1.379-1.121,2.5-2.5,2.5h-2.5v-8h2.5c1.379,0,2.5,1.121,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5h-1.5v6h1.5c.827,0,1.5-.673,1.5-1.5v-3Z"/>
</svg>

);
