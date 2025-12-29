import React from 'react';
import type { IconProps } from '../../types';

export const CommentAltLock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m9 4v-.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v.5h-2v7c0 1.654 1.346 3 3 3h5c1.654 0 3-1.346 3-3v-7zm-2.5 6h-2v-2h2zm.5-6h-3v-.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5zm17 8v12h-12c-5.476 0-10.097-3.691-11.531-8.712.745.442 1.604.712 2.531.712h5c2.757 0 5-2.243 5-5v-9h-2.208c-.188-.662-.508-1.265-.913-1.801.69-.124 1.396-.199 2.121-.199 6.617 0 12 5.383 12 12z"/></svg>
);

CommentAltLock.displayName = 'CommentAltLock';
