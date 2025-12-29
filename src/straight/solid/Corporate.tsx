import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Corporate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.5,15.5c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.121-2.5-2.5Zm7.5,6.5v2h-10v-2c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3Zm-12,2H0V3C0,1.346,1.346,0,3,0h10c1.654,0,3,1.346,3,3v9.17c-.914.824-1.5,2.005-1.5,3.33,0,.7.174,1.354.46,1.945-1.741.783-2.96,2.526-2.96,4.555v2Zm-3-17h3v-2h-3v2Zm0,4h3v-2h-3v2Zm0,4h3v-2h-3v2Zm0,4h3v-2h-3v2Zm-2-2h-3v2h3v-2Zm0-4h-3v2h3v-2Zm0-4h-3v2h3v-2Zm0-4h-3v2h3v-2Z"/>
</svg>

);
