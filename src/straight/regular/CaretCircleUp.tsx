import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,1,0,12,12.013,12.013,0,0,1,12,0Zm0,22A10,10,0,1,0,2,12,10.011,10.011,0,0,0,12,22ZM6,14H18L12.83,8.35a1.115,1.115,0,0,0-1.66,0Z"/></svg>

);
