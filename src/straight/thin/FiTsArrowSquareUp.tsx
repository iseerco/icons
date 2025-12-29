import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowSquareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.122,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23ZM13.155,6.479l4.809,4.809-.707,.707-4.757-4.757v10.762h-1V7.238l-4.757,4.757-.707-.707,4.809-4.809c.616-.617,1.693-.617,2.31,0Z"/></svg>

);
