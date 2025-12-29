import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowDownSmallBig = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.4,16.9l2.12,2.12-4.25,4.25c-.49,.49-1.13,.73-1.77,.73s-1.28-.24-1.77-.73L.45,19.07l2.1-2.14,2.45,2.4V0h3V19.29l2.4-2.4Zm3.6,6.1h10V13H14v10ZM16,1V9h8V1h-8Z"/></svg>

);
