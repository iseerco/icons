import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm5.731,11.6L12.644,16.75a.9.9,0,0,1-1.288,0L6.269,11.6a.924.924,0,0,1,.644-1.575H17.087A.924.924,0,0,1,17.731,11.6Z"/></svg>

);
