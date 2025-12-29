import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const U = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-5.514,0-10-4.486-10-10V1c0-.553,.448-1,1-1s1,.447,1,1V14c0,4.411,3.589,8,8,8s8-3.589,8-8V1c0-.553,.448-1,1-1s1,.447,1,1V14c0,5.514-4.486,10-10,10Z"/></svg>

);
