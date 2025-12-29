import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLandLayers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,19.001l12-7.2v3.499l-12,7.2L0,15.3v-3.499l12,7.2Zm12-10.001v1.099l-12,7.2L0,10.099v-1.099L12,1.8l12,7.2Zm-12-3.701l-2.529,1.517,2.571,1.543,2.529-1.517-2.571-1.543Zm-7.084,4.25l2.571,1.543,2.611-1.567-2.571-1.543-2.612,1.567Zm7.084,4.25l2.611-1.567-2.569-1.542-2.611,1.567,2.569,1.541Zm7.084-4.25l-2.57-1.542-2.529,1.518,2.57,1.542,2.529-1.517Z"/>
</svg>

);
