import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBorderAll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H24V2.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,2.5V11.5H12.5V1h9c.83,0,1.5,.67,1.5,1.5ZM2.5,1H11.5V11.5H1V2.5c0-.83,.67-1.5,1.5-1.5ZM1,12.5H11.5v10.5H1V12.5Zm11.5,10.5V12.5h10.5v10.5H12.5Z"/></svg>

);
