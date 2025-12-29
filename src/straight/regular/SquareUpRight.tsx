import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,7v8h-2v-6.586l-10.793,10.793-1.414-1.414L15.586,7h-6.586v-2h8c1.103,0,2,.897,2,2Zm5-4v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1v19h20V3Z"/>
</svg>

);
