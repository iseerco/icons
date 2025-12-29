import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RotateReverse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1,6V1h2v3.104C5.256,1.542,8.524,0,12,0c6.617,0,12,5.383,12,12h-2c0-5.514-4.486-10-10-10-3.154,0-6.115,1.51-7.991,4h3.991v2H3c-1.103,0-2-.897-2-2Zm20,10h-5v2h3.991c-1.877,2.49-4.837,4-7.991,4-5.514,0-10-4.486-10-10H0c0,6.617,5.383,12,12,12,3.476,0,6.744-1.542,9-4.104v3.104h2v-5c0-1.103-.897-2-2-2Z"/>
</svg>

);
