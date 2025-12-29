import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,10c-2.757,0-5,2.243-5,5v3c0,2.206-1.794,4-4,4s-4-1.794-4-4v-3c2.757,0,5-2.243,5-5v-3h1v-2h-3V0h-2v5h-4V0h-2v5H0v2h1v3c0,2.757,2.243,5,5,5v3c0,3.309,2.691,6,6,6s6-2.691,6-6v-3c0-1.654,1.346-3,3-3h3v-2h-3Z"/>
</svg>

);
