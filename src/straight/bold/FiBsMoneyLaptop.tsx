import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMoneyLaptop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22 19h2v2c0 1.657-1.343 3-3 3h-18c-1.657 0-3-1.343-3-3v-2h2v-13h4v3h-1v10h3.308l.923 1h5.538l.923-1h3.308v-7h3zm2-19v10h-16v-10zm-11.5 7c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm6 2c0-1.383-1.117-2.5-2.5-2.5s-2.5 1.117-2.5 2.5 1.117 2.5 2.5 2.5 2.5-1.117 2.5-2.5zm4 2c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"/></svg>
);

FiBsMoneyLaptop.displayName = 'FiBsMoneyLaptop';
