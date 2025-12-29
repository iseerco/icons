import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMeter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11ZM7,7h1v4h-1v-4Zm3,0h1v4h-1v-4Zm3,0h1v4h-1v-4Zm3,0h1v4h-1v-4Zm4,0v4h-1v-4h1Zm-16,0h1v4h-1v-4Z"/>
</svg>

);
