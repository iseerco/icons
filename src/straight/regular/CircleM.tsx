import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleM = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm6-14.324v10.324h-2v-9.086l-4,6.642-4-6.638v9.082h-2V7.676c0-.755.445-1.383,1.134-1.6.696-.221,1.452.042,1.88.654l2.985,4.951,2.949-4.895c.464-.668,1.219-.93,1.917-.711.688.217,1.134.845,1.134,1.6Z"/></svg>

);
