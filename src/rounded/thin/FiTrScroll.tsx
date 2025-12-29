import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrScroll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,18h-1V3.5c0-1.93-1.57-3.5-3.5-3.5H3C1.346,0,0,1.346,0,3s1.346,3,3,3h2v15c0,1.654,1.346,3,3,3h13c1.654,0,3-1.346,3-3s-1.346-3-3-3ZM5,5h-2c-1.103,0-2-.897-2-2S1.897,1,3,1s2,.897,2,2v2Zm3,18c-1.103,0-2-.897-2-2V3c0-.768-.29-1.469-.766-2h11.266c1.378,0,2.5,1.122,2.5,2.5v14.5h-6c-1.654,0-3,1.346-3,3,0,1.103-.897,2-2,2Zm13,0h-10.766c.476-.531.766-1.232.766-2,0-1.103.897-2,2-2h8c1.103,0,2,.897,2,2s-.897,2-2,2Z"/>
</svg>

);
