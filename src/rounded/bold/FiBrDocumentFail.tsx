import React from 'react';
import type { IconProps } from '../../types';

export const FiBrDocumentFail: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m3 1c-1.654 0-3 1.346-3 3v19h18v-16.337l-5.618-5.663zm8 3v4h4v2.451l-2.966 2.962-3.034-3.032-3.033 3.03-2.967-2.967v-6.444zm-8 16v-5.312l2.965 2.965 3.035-3.032 3.034 3.032 2.966-2.962v5.31h-12zm21-15v14l-2 2-2-2v-14c0-1.105.895-2 2-2s2 .895 2 2z"/></svg>
);

FiBrDocumentFail.displayName = 'FiBrDocumentFail';
