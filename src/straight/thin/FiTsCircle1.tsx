import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCircle1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,18h-1V7.641l-2.441,2.508-.717-.697,3.36-3.451h.798v12Zm11-6C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Zm-1,0c0,6.065-4.935,11-11,11S1,18.065,1,12,5.935,1,12,1s11,4.935,11,11Z"/></svg>

);
