import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleVideo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,10v4c0,.551-.449,1-1,1h-4c-.551,0-1-.449-1-1v-4c0-.551.449-1,1-1h4c.551,0,1,.449,1,1Zm11,2c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-4.907-2.336c0-.94-1.058-1.491-1.828-.952l-2.265,1.414v-.126c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v4c0,1.654,1.346,3,3,3h4c1.654,0,3-1.346,3-3v-.126l2.265,1.414c.77.539,1.828-.012,1.828-.952v-4.672Z"/>
</svg>

);
