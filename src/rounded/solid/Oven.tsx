import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Oven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,10v9c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-9H2Zm17,9c0,1.103-.897,2-2,2H7c-1.103,0-2-.897-2-2v-4c0-1.103.897-2,2-2h10c1.103,0,2,.897,2,2v4Zm-2-4l.002,4H7v-4h10Zm5-7v-3c0-2.757-2.243-5-5-5H7C4.243,0,2,2.243,2,5v3h20Zm-4.5-5c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-5.5,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-5.5,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Z"/>
</svg>

);
