import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MobileNotch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,0l-1,2h-6l-1-2H4V21c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V0h-4Zm-2,21h-4v-2h4v2Z"/></svg>

);
