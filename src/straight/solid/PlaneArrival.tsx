import React from 'react';
import type { IconProps } from '../../types';

export const PlaneArrival: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0v-2H24v2Zm-2.203-6.427c.551-1.26-.022-2.732-1.278-3.288L6.931,7.441l-1.262-3.229c-.186-.475-.545-.848-1.011-1.05-.627-.275-1.335-.198-1.887,.208-.555,.406-.842,1.055-.769,1.738l.629,5.89,18.155,8.881,1.01-2.306Zm-5.445-7.614l-.975-6.639c-.079-.912-.649-1.707-1.49-2.075l-2.886-1.245V7.263l5.351,2.696Z"/></svg>
);

PlaneArrival.displayName = 'PlaneArrival';
