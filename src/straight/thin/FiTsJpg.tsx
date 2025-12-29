import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsJpg = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,0H2.5C1.122,0,0,1.121,0,2.5v21.5h18.207l5.793-5.793V2.5c0-1.379-1.122-2.5-2.5-2.5ZM1,2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v14.5h-6v6H1V2.5Zm17,20.293v-4.793h4.793l-4.793,4.793Zm-2-14.293h-1v-1h2v1.5c0,1.103-.897,2-2,2s-2-.897-2-2v-3c0-1.103.897-2,2-2s2,.897,2,2h-1c0-.552-.449-1-1-1s-1,.448-1,1v3c0,.552.449,1,1,1s1-.448,1-1v-.5ZM6,4h1v5c0,1.103-.897,2-2,2s-2-.897-2-2h1c0,.552.449,1,1,1s1-.448,1-1v-5Zm4,0h-2v7h1v-3h1c1.103,0,2-.897,2-2s-.897-2-2-2Zm0,3h-1v-2h1c.551,0,1,.448,1,1s-.449,1-1,1Z"/>
</svg>

);
