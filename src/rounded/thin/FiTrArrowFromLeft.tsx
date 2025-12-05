import React from 'react';
import type { IconProps } from '../../types';

export const FiTrArrowFromLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.182,5.146c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l5.085,5.086c.161,.16,.275,.352,.349,.56H1V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v13c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-6H22.909c-.074,.208-.188,.4-.348,.561l-5.085,5.086c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l5.085-5.086c.472-.473,.732-1.1,.732-1.768s-.26-1.296-.732-1.768l-5.085-5.086Z"/></svg>
);

FiTrArrowFromLeft.displayName = 'FiTrArrowFromLeft';
