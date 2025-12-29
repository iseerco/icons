import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Thursday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,17.6h-1.75v6.4h-1.6v-6.4h-1.65v-1.6h5v1.6Zm3.9-1.6v3.25h-1.413v-3.25h-1.6v8h1.6v-3.15h1.413v3.15h1.6v-8h-1.6Zm5.5,0v5.73c0,.386-.314.7-.7.7s-.7-.314-.7-.7v-5.73h-1.6v5.73c0,1.269,1.031,2.3,2.3,2.3s2.3-1.031,2.3-2.3v-5.73h-1.6ZM0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm0,2v14h7.65v-4.431h-1.65v-5.569h18v-4H0Z"/>
</svg>

);
