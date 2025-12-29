import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BeerMugEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.961,5.98h-2v-3h1V.98H-.039v2H.961v17c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3v-3h5v-8c0-1.654-1.346-3-3-3Zm-13.961,12.02h-2V6h2v12Zm4,0h-2V6h2v12Zm4,0h-2V6h2v12Zm6.961-3.02h-3v-7h2c.551,0,1,.448,1,1v6Z"/>
</svg>

);
