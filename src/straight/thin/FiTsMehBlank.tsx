import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMehBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,10c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm7-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm8,3C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Zm-1,0c0,6.065-4.935,11-11,11S1,18.065,1,12,5.935,1,12,1s11,4.935,11,11Z"/></svg>

);
