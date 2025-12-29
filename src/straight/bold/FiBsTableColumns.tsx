import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTableColumns = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3.5,5H20.5c.276,0,.5,.225,.5,.5v1.5H3v-1.5c0-.275,.224-.5,.5-.5Zm-.5,5h7.5v9H3V10Zm10.5,9V10h7.5v9h-7.5Z"/></svg>

);
