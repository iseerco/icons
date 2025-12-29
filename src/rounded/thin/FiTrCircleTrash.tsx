import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleTrash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm5.5-15h-2.5v-1c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2v1h-2.5c-.276,0-.5.224-.5.5s.224.5.5.5h.5v7c0,1.654,1.346,3,3,3h4c1.654,0,3-1.346,3-3v-7h.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-7.5-1c0-.551.448-1,1-1h2c.552,0,1,.449,1,1v1h-4v-1Zm6,9c0,1.103-.897,2-2,2h-4c-1.103,0-2-.897-2-2v-7h8v7Z"/>
</svg>

);
