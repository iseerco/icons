import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChairDirector = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,0h-3V2H3V0H0V14.391l8.867,4.837L.118,24H6.382l5.618-3.064,5.618,3.064h6.265l-8.75-4.773,8.867-4.837V0Zm-3,8v2.892c-1.504,.412-4.677,1.108-9,1.108s-7.496-.695-9-1.108v-2.892H21Zm-9,9.519l-5.21-2.842c1.494,.189,3.238,.323,5.21,.323s3.715-.134,5.21-.323l-5.21,2.842Z"/>
</svg>

);
