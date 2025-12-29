import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPriorityArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,9h6v6h-6v-6Zm0-8v6h6V1h-6Zm0,22h6v-6h-6v6Zm-2.293-17.793c.39-.39.39-1.024,0-1.414l-3.707-3.793v3h-3C4.038,3,0,7.038,0,12s4.038,9,9,9h7v-3h-7c-3.309,0-6-2.691-6-6s2.691-6,6-6h3v3l3.707-3.793Z"/>
</svg>

);
