import React from 'react';
import type { IconProps } from '../../types';

export const FiBrThermometerEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m15,16c0,1.657-1.343,3-3,3s-3-1.343-3-3,1.343-3,3-3,3,1.343,3,3Zm5,0c0,4.411-3.589,8-8,8s-8-3.589-8-8c0-1.959.706-3.807,2-5.271v-4.729c0-3.309,2.691-6,6-6s6,2.691,6,6v4.729c1.294,1.464,2,3.312,2,5.271Zm-3,0c0-1.357-.547-2.632-1.541-3.59-.293-.283-.459-.673-.459-1.08v-5.33c0-1.654-1.346-3-3-3s-3,1.346-3,3v5.33c0,.407-.166.797-.459,1.08-.994.958-1.541,2.232-1.541,3.59,0,2.757,2.243,5,5,5s5-2.243,5-5Z"/>
</svg>
);

FiBrThermometerEmpty.displayName = 'FiBrThermometerEmpty';
