import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm-.25-17.25h-1.75c-1.654,0-3,1.346-3,3v6.5c0,1.654,1.346,3,3,3h1.75c3.446,0,6.25-2.804,6.25-6.25s-2.804-6.25-6.25-6.25Zm0,11.5h-1.75c-1.103,0-2-.897-2-2v-6.5c0-1.103.897-2,2-2h1.75c2.895,0,5.25,2.355,5.25,5.25s-2.355,5.25-5.25,5.25Z"/></svg>

);
