import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PointerText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13,4V20c0,1.103,.897,2,2,2h3v2h-3c-1.201,0-2.266-.542-3-1.382-.734,.84-1.799,1.382-3,1.382h-3v-2h3c1.103,0,2-.897,2-2V4c0-1.103-.897-2-2-2h-3V0h3c1.201,0,2.266,.542,3,1.382,.734-.84,1.799-1.382,3-1.382h3V2h-3c-1.103,0-2,.897-2,2Z"/>
</svg>

);
