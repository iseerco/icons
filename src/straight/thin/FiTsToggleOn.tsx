import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsToggleOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,4h-8C3.589,4,0,7.589,0,12s3.589,8,8,8h8c4.411,0,8-3.589,8-8s-3.589-8-8-8Zm0,15h-8c-3.86,0-7-3.141-7-7s3.14-7,7-7h8c3.86,0,7,3.141,7,7s-3.14,7-7,7Zm4-7c0,2.206-1.794,4-4,4s-4-1.794-4-4,1.794-4,4-4,4,1.794,4,4Z"/></svg>

);
