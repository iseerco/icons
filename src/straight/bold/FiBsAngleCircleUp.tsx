import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,1,0,12,12.013,12.013,0,0,1,12,0Zm0,21a9,9,0,1,0-9-9A9.01,9.01,0,0,0,12,21ZM10.232,8.732l-4.25,4.25L8.1,15.1l3.9-3.9,3.9,3.9,2.122-2.122-4.25-4.25a2.5,2.5,0,0,0-3.536,0Z"/></svg>

);
