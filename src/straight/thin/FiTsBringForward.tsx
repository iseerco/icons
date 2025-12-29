import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBringForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,16H0V2.5C0,1.12,1.12,0,2.5,0H13.5c1.38,0,2.5,1.12,2.5,2.5v13.5ZM1,15H15V2.5c0-.83-.67-1.5-1.5-1.5H2.5c-.83,0-1.5,.67-1.5,1.5V15Zm23-4.5c0-1.38-1.12-2.5-2.5-2.5h-3.5v1h3.5c.83,0,1.5,.67,1.5,1.5v12.5H9v-5h-1v6H24V10.5Z"/></svg>

);
