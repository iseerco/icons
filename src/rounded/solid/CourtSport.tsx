import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CourtSport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,14c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2ZM3,10H0v4h3v-4Zm18,4h3v-4h-3v4Zm-2,0v-4c0-1.103.897-2,2-2h3c0-2.757-2.243-5-5-5h-6v5.142c1.72.447,3,1.999,3,3.858s-1.28,3.411-3,3.858v5.142h6c2.757,0,5-2.243,5-5h-3c-1.103,0-2-.897-2-2Zm-8,1.858c-1.72-.447-3-1.999-3-3.858s1.28-3.411,3-3.858V3h-6C2.243,3,0,5.243,0,8h3c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2H0c0,2.757,2.243,5,5,5h6v-5.142Z"/>
</svg>

);
