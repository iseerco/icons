import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlaneArrival = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0v-2H24v2Zm-2.203-6.427c.551-1.26-.022-2.732-1.278-3.288L6.931,7.441l-1.262-3.229c-.186-.475-.545-.848-1.011-1.05-.627-.275-1.335-.198-1.887,.208-.555,.406-.842,1.055-.769,1.738l.629,5.89,18.155,8.881,1.01-2.306Zm-5.445-7.614l-.975-6.639c-.079-.912-.649-1.707-1.49-2.075l-2.886-1.245V7.263l5.351,2.696Z"/></svg>

);
