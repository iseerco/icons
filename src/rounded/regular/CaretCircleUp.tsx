import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,1,0,12,12.013,12.013,0,0,1,12,0Zm0,22A10,10,0,1,0,2,12,10.011,10.011,0,0,0,12,22Zm5.731-9.6L12.644,7.25a.9.9,0,0,0-1.288,0L6.269,12.4a.924.924,0,0,0,.644,1.575H17.087A.924.924,0,0,0,17.731,12.4Z"/></svg>

);
