import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsObjectSubtract = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,16H0v-4H1v3h3v1Zm6-1H6v1h4v-1Zm6-3h-1v3h-3v1h4v-4Zm0-6h-1v4h1V6Zm0-3.5c0-1.38-1.12-2.5-2.5-2.5h-1.5V1h1.5c.83,0,1.5,.67,1.5,1.5v1.5h1v-1.5ZM10,0H6V1h4V0ZM1,2.5c0-.83,.67-1.5,1.5-1.5h1.5V0h-1.5C1.12,0,0,1.12,0,2.5v1.5H1v-1.5Zm0,3.5H0v4H1V6Zm23,4.5c0-1.38-1.12-2.5-2.5-2.5h-3.5v1h3.5c.83,0,1.5,.67,1.5,1.5v12.5H9v-5h-1v6H24V10.5Z"/></svg>

);
