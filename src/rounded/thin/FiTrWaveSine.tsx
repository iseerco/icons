import React from 'react';
import type { IconProps } from '../../types';

export const FiTrWaveSine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17.75,21c-3.854,0-5.401-5.771-6.233-8.871-1.132-4.222-2.554-8.129-5.267-8.129-2.115,0-4.725,3.649-5.252,9.544-.025.275-.276.472-.543.454-.274-.024-.478-.268-.453-.542C.535,7.495,3.221,3,6.25,3c3.854,0,5.401,5.771,6.233,8.871,1.132,4.222,2.554,8.129,5.267,8.129,2.115,0,4.725-3.649,5.252-9.544.024-.276.271-.486.543-.454.274.024.478.268.453.542-.533,5.96-3.219,10.456-6.248,10.456Z"/></svg>
);

FiTrWaveSine.displayName = 'FiTrWaveSine';
