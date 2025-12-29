import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightCeiling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,5.027V0h-2v5.027C4.85,5.538,0,10.697,0,16.976v2.024h24v-2.024c0-6.279-4.85-11.438-11-11.949Zm2.858,15.973c-.447,1.72-1.999,3-3.858,3s-3.411-1.28-3.858-3h7.716Z"/>
</svg>

);
