import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBlueprint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,4V0h-3C1.346,0,0,1.346,0,3v18c0,1.654,1.346,3,3,3h21V4H6ZM1,3c0-1.103.897-2,2-2h2v17h-2c-.768,0-1.469.29-2,.766V3Zm22,20H3c-1.103,0-2-.897-2-2s.897-2,2-2h3V5h17v18Zm-2-2h-13V7h3v1h-2v3h2v1h-2v8h5v-5h-2v-1h5v1h-2v5h5v-12h-5v3h-1v-4h7v14Z"/>
</svg>

);
