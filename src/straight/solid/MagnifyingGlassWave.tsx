import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MagnifyingGlassWave = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.738,16.324c1.412-1.725,2.262-3.927,2.262-6.324C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.398,0,4.6-.85,6.324-2.262l6.193,6.193,1.414-1.414-6.193-6.193Zm-9.738-3.324h-2v-6h2v6Zm3,2h-2V5h2v10Zm3-3h-2v-4h2v4Z"/>
</svg>

);
