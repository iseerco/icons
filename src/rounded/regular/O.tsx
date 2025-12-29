import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const O = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.021,24c-5.514,0-10-4.486-10-10v-4c.504-13.251,19.5-13.241,20,0v4c0,5.514-4.486,10-10,10Zm0-22c-4.411,0-8,3.589-8,8v4c.377,10.591,15.627,10.583,16,0v-4c0-4.411-3.589-8-8-8Z"/></svg>

);
