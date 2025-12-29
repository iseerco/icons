import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,2a9.951,9.951,0,0,1,6.325,2.261L4.261,18.325A9.994,9.994,0,0,1,12,2Zm0,20a9.946,9.946,0,0,1-6.325-2.261L19.739,5.675A9.994,9.994,0,0,1,12,22Z"/></svg>

);
