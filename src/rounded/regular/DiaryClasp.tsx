import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiaryClasp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,0H7C4.243,0,2,2.243,2,5v15c0,2.206,1.794,4,4,4h11c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,11h-3c-.552,0-1-.448-1-1s.448-1,1-1h3v2Zm0-6v2h-3c-1.654,0-3,1.346-3,3s1.346,3,3,3h3v3h-12V2h9c1.654,0,3,1.346,3,3ZM6,2.172v13.828c-.728,0-1.411.196-2,.537V5c0-1.304.836-2.415,2-2.828Zm11,19.828H6c-1.103,0-2-.897-2-2s.897-2,2-2h14v1c0,1.654-1.346,3-3,3Z"/>
</svg>

);
