import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCrateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,11v9.5c0,1.93,1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5v-9.5H0Zm21,9.5c0,.276-.225.5-.5.5H3.5c-.275,0-.5-.224-.5-.5v-1.5h16v-3H3v-2h18v6.5Z"/>
</svg>

);
