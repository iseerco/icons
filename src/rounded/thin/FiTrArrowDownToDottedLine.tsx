import React from 'react';
import type { IconProps } from '../../types';

export const FiTrArrowDownToDottedLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.76,19.27c-.46,.47-1.09,.73-1.76,.73s-1.3-.26-1.77-.73l-4.58-4.41c-.2-.19-.21-.51-.01-.71,.19-.2,.51-.21,.71-.01l4.59,4.41c.16,.16,.36,.28,.57,.35V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V18.91c.21-.07,.4-.19,.56-.35l4.59-4.42c.2-.19,.51-.19,.71,.01,.19,.2,.19,.52-.01,.71l-4.59,4.41Zm-7.76,2.73c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm4,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm-8,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm20,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm-8,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm4,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z"/></svg>
);

FiTrArrowDownToDottedLine.displayName = 'FiTrArrowDownToDottedLine';
