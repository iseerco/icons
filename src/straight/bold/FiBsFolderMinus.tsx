import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,12.5h8v3H8v-3ZM24,6.5V23H0V4.5C0,2.57,1.57,1,3.5,1h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5Zm-3,13.5V8H3v12H21Z"/></svg>

);
