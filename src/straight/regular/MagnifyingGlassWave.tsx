import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MagnifyingGlassWave = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.932,22.518l-6.193-6.193c1.412-1.725,2.262-3.927,2.262-6.324C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.398,0,4.6-.85,6.324-2.262l6.193,6.193,1.414-1.414Zm-13.932-4.518c-4.411,0-8-3.589-8-8S5.589,2,10,2s8,3.589,8,8-3.589,8-8,8Zm-1-13h2v10h-2V5Zm3,3h2v4h-2v-4Zm-6-1h2v6h-2v-6Z"/>
</svg>

);
