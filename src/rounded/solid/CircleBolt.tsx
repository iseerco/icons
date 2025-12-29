import React from 'react';
import type { IconProps } from '../../types';

export const CircleBolt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm3.73,13.49l-2.86,5.01c-.18,.32-.52,.5-.87,.5-.17,0-.34-.04-.5-.13-.48-.27-.65-.89-.37-1.36l2.58-4.5h-4.09c-.51,0-.99-.24-1.3-.65s-.4-.94-.25-1.43c.02-.07,.05-.14,.09-.21l2.97-5.21c.27-.48,.88-.65,1.36-.37,.48,.27,.65,.88,.37,1.36l-2.57,4.5h4.1c.59,0,1.13,.32,1.41,.85s.25,1.15-.08,1.64Z"/></svg>
);

CircleBolt.displayName = 'CircleBolt';
