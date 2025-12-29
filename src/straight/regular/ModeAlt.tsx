import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ModeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C7.589,0,4,3.589,4,8v8c0,4.411,3.589,8,8,8s8-3.589,8-8v-8C20,3.589,16.411,0,12,0Zm6,16c0,3.309-2.691,6-6,6s-6-2.691-6-6v-8c0-3.309,2.691-6,6-6s6,2.691,6,6v8Zm-6-4c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/>
</svg>

);
