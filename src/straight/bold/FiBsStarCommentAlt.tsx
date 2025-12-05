import React from 'react';
import type { IconProps } from '../../types';

export const FiBsStarCommentAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.96,15l-.72-.54,1.08-3.69-2.82-1.85v-.92h3.85l1.18-4h.97l1.18,4h3.83v.92l-2.8,1.91,1.17,3.65-.75,.52-3.1-2.14-3.05,2.14Zm4.66,8.07l3.71-3.07h6.67V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V20H6.74l3.6,3.03c.48,.43,1.08,.64,1.67,.64s1.16-.2,1.61-.6ZM3,3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v13.5h-4.75l-4.25,3.51-4.17-3.51H3V3.5Z"/></svg>
);

FiBsStarCommentAlt.displayName = 'FiBsStarCommentAlt';
