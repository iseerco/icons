import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm1.414,17.414a2,2,0,0,1-2.828,0L6.343,13.171l1.414-1.414L11,15V6h2v9l3.243-3.243,1.414,1.414Z"/></svg>

);
