import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrWaveSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,22h-3.5c-1.654,0-3-1.346-3-3V5c0-1.103-.897-2-2-2h-3.5c-1.103,0-2,.897-2,2v7.5c0,.276-.224.5-.5.5H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h2.5v-7c0-1.654,1.346-3,3-3h3.5c1.654,0,3,1.346,3,3v14c0,1.103.897,2,2,2h3.5c1.103,0,2-.897,2-2v-7.5c0-.276.224-.5.5-.5h3c.276,0,.5.224.5.5s-.224.5-.5.5h-2.5v7c0,1.654-1.346,3-3,3Z"/></svg>

);
