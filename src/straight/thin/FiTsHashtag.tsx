import React from 'react';
import type { IconProps } from '../../types';

export const FiTsHashtag: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m23.882,8l.118-1h-6.469l.841-7h-1.053l-.841,7h-7.842l.841-7h-1.053l-.841,7H.941l-.118,1h6.639l-.841,7H.118L0,16h6.502l-.961,8h1.053l.961-8h7.842l-.961,8h1.053l.961-8h6.726l.118-1h-6.724l.841-7h6.472Zm-8.365,7h-7.842l.841-7h7.842l-.841,7Z"/></svg>
);

FiTsHashtag.displayName = 'FiTsHashtag';
