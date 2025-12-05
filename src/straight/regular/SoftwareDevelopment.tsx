import React from 'react';
import type { IconProps } from '../../types';

export const SoftwareDevelopment: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18 10h-2v-9h4.277c.346-.595.984-1 1.723-1 1.105 0 2 .895 2 2s-.895 2-2 2c-.738 0-1.376-.405-1.723-1h-2.277zm-16-6c.738 0 1.376-.405 1.723-1h2.277v7h2v-9h-4.277c-.346-.595-.984-1-1.723-1-1.105 0-2 .895-2 2s.895 2 2 2zm9-.277v6.277h2v-6.277c.595-.346 1-.984 1-1.723 0-1.105-.895-2-2-2s-2 .895-2 2c0 .738.405 1.376 1 1.723zm11 14.277h-20v-12c-.732 0-1.41-.211-2-.555v14.555h11v2h-5v2h12v-2h-5v-2h11v-14.555c-.59.344-1.268.555-2 .555z"/></svg>
);

SoftwareDevelopment.displayName = 'SoftwareDevelopment';
