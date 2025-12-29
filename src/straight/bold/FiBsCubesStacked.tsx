import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCubesStacked = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,14h-.5v-4c0-1.654-1.346-3-3-3h-.5V3c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v4h-.5c-1.654,0-3,1.346-3,3v4h-.5c-1.654,0-3,1.346-3,3v7h24v-7c0-1.654-1.346-3-3-3Zm-3.5-4v4h-4v-4h4Zm-7.5-7h4v4h-4V3Zm-3.5,7h4v4h-4v-4Zm.5,11H3v-4h4v4Zm7,0h-4v-4h4v4Zm7,0h-4v-4h4v4Z"/>
</svg>

);
