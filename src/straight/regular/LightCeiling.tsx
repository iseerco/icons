import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightCeiling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18c0-6.279-4.85-11.438-11-11.949V0h-2v6.051C4.85,6.562,0,11.721,0,18v2.024h8.002c.013,2.194,1.8,3.976,3.998,3.976s3.984-1.782,3.998-3.976h8.002v-2.024Zm-12,4c-1.094,0-1.984-.884-1.998-1.976h3.995c-.013,1.092-.903,1.976-1.998,1.976Zm-10-3.976v-.024c0-5.514,4.486-10,10-10s10,4.486,10,10l-20,.024Z"/>
</svg>

);
