import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDatabase: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 3.5a3.5 3.5 0 0 0 -3.5-3.5h-17a3.5 3.5 0 0 0 -3.5 3.5v3a3.48 3.48 0 0 0 .635 2 3.48 3.48 0 0 0 -.635 2v3a3.48 3.48 0 0 0 .635 2 3.48 3.48 0 0 0 -.635 2v6.5h24v-6.5a3.48 3.48 0 0 0 -.635-2 3.48 3.48 0 0 0 .635-2v-3a3.48 3.48 0 0 0 -.635-2 3.48 3.48 0 0 0 .635-2zm-21 0a.5.5 0 0 1 .5-.5h1.5v2h3v-2h2v2h3v-2h7.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1 -.5.5h-17a.5.5 0 0 1 -.5-.5zm18 7v3a.5.5 0 0 1 -.5.5h-17a.5.5 0 0 1 -.5-.5v-3a.5.5 0 0 1 .5-.5h1.5v2h3v-2h2v2h3v-2h7.5a.5.5 0 0 1 .5.5zm0 10.5h-18v-3.5a.5.5 0 0 1 .5-.5h1.5v2h3v-2h2v2h3v-2h7.5a.5.5 0 0 1 .5.5z"/></svg>
);

FiBsDatabase.displayName = 'FiBsDatabase';
