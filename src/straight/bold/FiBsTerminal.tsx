import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTerminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.04,12L2.1,21.95-.02,19.82l7.82-7.82L-.02,4.18,2.1,2.05,12.04,12Zm-1.04,7v3h13v-3H11Z"/></svg>

);
