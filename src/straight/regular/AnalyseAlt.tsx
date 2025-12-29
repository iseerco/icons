import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AnalyseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.938,22.523l-6.194-6.193c1.412-1.725,2.262-3.927,2.262-6.324C20.006,4.492,15.52.006,10.006.006S.006,4.492.006,10.006s4.486,10,10,10c2.398,0,4.6-.85,6.324-2.262l6.194,6.193,1.414-1.414Zm-13.932-4.518c-4.411,0-8-3.589-8-8S5.595,2.006,10.006,2.006s8,3.589,8,8-3.589,8-8,8Zm3.994-7.006h1v2H5v-2h1v-3h2v3h1v-6h2v6h1v-4h2v4Z"/>
</svg>

);
