import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSignalBarsWeak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,24c-1.103,0-2-.897-2-2v-3c0-1.103.897-2,2-2s2,.897,2,2v3c0,1.103-.897,2-2,2Zm0-6c-.552,0-1,.448-1,1v3c0,.552.448,1,1,1s1-.448,1-1v-3c0-.552-.448-1-1-1Z"/></svg>

);
