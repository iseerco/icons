import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLessThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,23h18v1H3v-1ZM21,0L2.5,9.5l18.5,9.5v-1.121L4.736,9.5,21,1.092V0Z"/>
</svg>

);
