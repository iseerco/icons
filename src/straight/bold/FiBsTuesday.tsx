import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTuesday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5v9h-3v-4H3v11h5v3H0V5c0-1.654,1.346-3,3-3h3V0h3v2h6V0h3v2h3c1.654,0,3,1.346,3,3Zm-15.243,12.569h1.649v6.4h1.6v-6.4h1.751v-1.6h-5v1.6Zm11.743,6.4h3.5v-1.6h-1.9v-1.551h1.9v-1.6h-1.9v-1.65h1.9v-1.6h-3.5v8Zm-2.761-2.27c0,.386-.314.7-.7.7s-.7-.314-.7-.7v-5.73h-1.6v5.73c0,1.269,1.031,2.3,2.3,2.3s2.3-1.031,2.3-2.3v-5.73h-1.6v5.73Z"/>
</svg>

);
