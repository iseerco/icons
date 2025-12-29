import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icicles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <polygon points="0 0 24 0 24 .635 21 22 17.868 9.281 15.011 18.143 11.908 9.267 8 24 4.571 9.532 2 17 0 .635 0 0"/>
</svg>

);
