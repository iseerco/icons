import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsOval = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,20c-6.617,0-12-3.589-12-8S5.383,4,12,4s12,3.589,12,8-5.383,8-12,8Zm0-15c-6.065,0-11,3.14-11,7s4.935,7,11,7,11-3.14,11-7-4.935-7-11-7Z"/>
</svg>

);
