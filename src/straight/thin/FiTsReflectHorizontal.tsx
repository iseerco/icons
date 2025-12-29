import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsReflectHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.35,10.53L0,2.89V21.11l8.34-7.63c.42-.38,.66-.91,.66-1.48s-.24-1.1-.66-1.47Zm-.67,2.21L1.01,18.84V5.16l6.67,6.11c.21,.19,.33,.45,.33,.73s-.12,.54-.33,.73Zm7.98-2.21c-.42,.38-.66,.91-.66,1.48s.24,1.1,.65,1.47l8.35,7.63V2.89l-8.34,7.63ZM11.5,0h1V24h-1V0Z"/></svg>

);
