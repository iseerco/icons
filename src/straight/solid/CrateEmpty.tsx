import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CrateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,21c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3v-2H0v2Zm24-9H0v5h24v-5Z"/>
</svg>

);
