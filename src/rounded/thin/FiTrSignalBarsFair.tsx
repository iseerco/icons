import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSignalBarsFair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,11c-1.103,0-2,.897-2,2v9c0,1.103.897,2,2,2s2-.897,2-2v-9c0-1.103-.897-2-2-2Zm1,11c0,.552-.448,1-1,1s-1-.448-1-1v-9c0-.551.448-1,1-1s1,.449,1,1v9Zm-7-5c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2s2-.897,2-2v-3c0-1.103-.897-2-2-2Zm1,5c0,.552-.448,1-1,1s-1-.448-1-1v-3c0-.552.448-1,1-1s1,.448,1,1v3Z"/></svg>

);
