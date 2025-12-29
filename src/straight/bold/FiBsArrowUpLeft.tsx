import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowUpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.974,21.853L5.121,3H15V0H2.5C1.122,0,0,1.122,0,2.5V15H3V5.121L21.853,23.974l2.121-2.121Z"/></svg>

);
