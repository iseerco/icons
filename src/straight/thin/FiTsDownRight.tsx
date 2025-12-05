import React from 'react';
import type { IconProps } from '../../types';

export const FiTsDownRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,23H6.81l4.86-4.96L.96,7.33,7.33,.96l10.71,10.71,4.96-4.86v13.68c0,.67-.25,1.3-.73,1.77-.47,.47-1.1,.73-1.77,.73Zm-11.31-1h11.31c.4,0,.78-.16,1.06-.44,.28-.29,.44-.66,.44-1.07V9.19s-3.98,3.89-3.98,3.89L7.33,2.38,2.38,7.33l10.7,10.7-3.89,3.97Z"/></svg>
);

FiTsDownRight.displayName = 'FiTsDownRight';
