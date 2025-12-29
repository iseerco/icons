import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CourtSport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,14H0v-4h3v4Zm11-2c0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2,2-.897,2-2Zm10,2v-4h-3v4h3Zm-5,2v-8h5v-2c0-1.654-1.346-3-3-3h-8v5.142c1.72.447,3,1.999,3,3.858s-1.28,3.411-3,3.858v5.142h8c1.654,0,3-1.346,3-3v-2h-5Zm-8-.142c-1.72-.447-3-1.999-3-3.858s1.28-3.411,3-3.858V3H3c-1.654,0-3,1.346-3,3v2h5v8H0v2c0,1.654,1.346,3,3,3h8v-5.142Z"/>
</svg>

);
