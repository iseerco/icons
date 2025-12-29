import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlagAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.008,0H3.5C1.57,0,0,1.57,0,3.5V24H3v-8H24.008l-6.028-8L24.008,0Zm-6.017,13H3V3.5c0-.275,.224-.5,.5-.5h14.492l-3.767,5,3.767,5Z"/></svg>

);
