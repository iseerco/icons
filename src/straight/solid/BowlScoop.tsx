import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BowlScoop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,13l1.412,3.584c1.556,2.493,4.347,2.46,6.794,2.432.338-.005,1.77-.01,2.794-.013v2.998h-4v2h10v-2h-4v-2.998c1.024.003,3.348-.002,3.627-.002,2.228,0,4.577-.197,5.961-2.416l1.412-3.584H0Zm1-2C1,4.935,5.935,0,12,0s11,4.935,11,11H1Z"/>
</svg>

);
