import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListTimeline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9H9.02l-3,3,3,3h12.98c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm-3-3c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2H9.02l-3,3,3,3h9.98Zm-2,12h-7.98l-3,3,3,3h7.98c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm-13,3c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm0-9c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm0-9c0,1.1-.9,2-2,2S0,4.1,0,3,.9,1,2,1s2,.9,2,2Z"/></svg>

);
