import React from 'react';
import type { IconProps } from '../../types';

export const FiBrY: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21.443,.334c-.645-.522-1.588-.421-2.109,.223l-7.334,9.06L4.666,.557c-1.241-1.519-3.56,.357-2.332,1.887L10.5,12.531v9.969c.034,1.972,2.966,1.971,3,0V12.531L21.666,2.443c.521-.644,.422-1.588-.223-2.109Z"/></svg>
);

FiBrY.displayName = 'FiBrY';
