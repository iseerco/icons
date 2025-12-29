import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChild = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,10c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.122,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm1,5h-2c-1.654,0-3,1.346-3,3v3c0,1.304.836,2.415,2,2.828v3.672c0,.276.224.5.5.5s.5-.224.5-.5v-3.5h2v3.5c0,.276.224.5.5.5s.5-.224.5-.5v-3.672c1.164-.413,2-1.524,2-2.828v-3c0-1.654-1.346-3-3-3Zm2,6c0,1.103-.897,2-2,2h-2c-1.103,0-2-.897-2-2v-3c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2v3Z"/>
</svg>

);
