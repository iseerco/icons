import React from 'react';
import type { IconProps } from '../../types';

export const CircleA: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.789,17.25l-.945-3h-5.691l-.943,3h-2.126l3.374-10.049c.621-1.411,1.465-1.701,2.542-1.701,1.077,0,1.922.29,2.526,1.658l3.39,10.092h-2.127Zm-6.007-5l1.295-4.119c.194-.408.542-.625.917-.631.388.005.736.223.9.555l1.321,4.195h-4.433Z"/></svg>
);

CircleA.displayName = 'CircleA';
