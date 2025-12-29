import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PasswordComputer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,19V4c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v15h11v2h-5v2h12v-2h-5v-2h11Zm-7.845-10.535l1.414-1.414,1.503,1.503,1.503-1.503,1.414,1.414-1.503,1.503,1.503,1.503-1.414,1.414-1.503-1.503-1.503,1.503-1.414-1.414,1.503-1.503-1.503-1.503Zm-8.311,3.006l-1.414,1.414-1.503-1.503-1.503,1.503-1.414-1.414,1.503-1.503-1.503-1.503,1.414-1.414,1.503,1.503,1.503-1.503,1.414,1.414-1.503,1.503,1.503,1.503Zm2.652,1.414l-1.414-1.414,1.503-1.503-1.503-1.503,1.414-1.414,1.503,1.503,1.503-1.503,1.414,1.414-1.503,1.503,1.503,1.503-1.414,1.414-1.503-1.503-1.503,1.503Z"/>
</svg>

);
