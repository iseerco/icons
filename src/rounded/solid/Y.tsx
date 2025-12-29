import React from 'react';
import type { IconProps } from '../../types';

export const Y: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.633,.226c-.427-.348-1.057-.287-1.407,.142L12,10.421,3.774,.367c-.351-.429-.98-.49-1.407-.142-.428,.351-.491,.98-.142,1.407L11,12.357v10.643c0,.553,.447,1,1,1s1-.447,1-1V12.357L21.774,1.633c.35-.427,.286-1.057-.142-1.407Z"/></svg>
);

Y.displayName = 'Y';
