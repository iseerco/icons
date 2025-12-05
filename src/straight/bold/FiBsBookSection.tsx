import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBookSection: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H5C2.79,0,1,1.79,1,4V20c0,2.21,1.79,4,4,4H23V2.5c0-1.38-1.12-2.5-2.5-2.5Zm-.5,16H10V3h10v13ZM5,3h2v13h-2c-.35,0-.68,.04-1,.13V4c0-.55,.45-1,1-1Zm0,18c-.55,0-1-.45-1-1s.45-1,1-1h15v2H5Zm7-11.5c0,1.38,1.12,2.5,2.5,2.5,.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-1.5v2h1.5c1.38,0,2.5-1.12,2.5-2.5,0-.31-.06-.61-.16-.89,.7-.44,1.16-1.22,1.16-2.11,0-1.38-1.12-2.5-2.5-2.5-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h1.5v-2h-1.5c-1.38,0-2.5,1.12-2.5,2.5,0,.31,.06,.61,.16,.89-.7,.44-1.16,1.22-1.16,2.11Zm4,0c0,.28-.22,.5-.5,.5h-1c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h1c.28,0,.5,.22,.5,.5Z"/></svg>
);

FiBsBookSection.displayName = 'FiBsBookSection';
