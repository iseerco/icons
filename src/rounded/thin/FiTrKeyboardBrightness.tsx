import React from 'react';
import type { IconProps } from '../../types';

export const FiTrKeyboardBrightness: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.5,17H7.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h9c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Zm-4-8.5V3.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5ZM4,16.5c0-.28-.22-.5-.5-.5H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H3.5c.28,0,.5-.22,.5-.5Zm20,0c0-.28-.22-.5-.5-.5h-3c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h3c.28,0,.5-.22,.5-.5Zm-5.65-5.65l3-3c.2-.2,.2-.51,0-.71s-.51-.2-.71,0l-3,3c-.2,.2-.2,.51,0,.71,.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Zm-12,0c.2-.2,.2-.51,0-.71l-3-3c-.2-.2-.51-.2-.71,0s-.2,.51,0,.71l3,3c.1,.1,.23,.15,.35,.15s.26-.05,.35-.15Z"/></svg>
);

FiTrKeyboardBrightness.displayName = 'FiTrKeyboardBrightness';
