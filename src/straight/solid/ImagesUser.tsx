import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ImagesUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,20v2H0v-13c0-1.654,1.346-3,3-3v14h16Zm-2-6h-5c-.551,0-1,.448-1,1v3h7v-3c0-.552-.449-1-1-1Zm7,4h-4v-3c0-1.654-1.346-3-3-3h-5c-1.654,0-3,1.346-3,3v3h-4V5c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3v13Zm-7-10.5c0-1.379-1.121-2.5-2.5-2.5s-2.5,1.121-2.5,2.5,1.121,2.5,2.5,2.5,2.5-1.121,2.5-2.5Z"/>
</svg>

);
