import React from 'react';
import type { IconProps } from '../../types';

export const FirstAidKit: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m13 13h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm11-5v15h-24v-15c0-1.654 1.346-3 3-3h5v-4h8v4h5c1.654 0 3 1.346 3 3zm-14-3h4v-2h-4zm7 9c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>
);

FirstAidKit.displayName = 'FirstAidKit';
