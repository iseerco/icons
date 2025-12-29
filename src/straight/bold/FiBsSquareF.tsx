import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v17.5ZM8.5,5h9.5v3h-9v3h6v3h-6v5h-3V7.5c0-1.378,1.121-2.5,2.5-2.5Z"/></svg>

);
