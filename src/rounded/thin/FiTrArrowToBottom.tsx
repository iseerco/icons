import React from 'react';
import type { IconProps } from '../../types';

export const FiTrArrowToBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,23h-5.602c.317-.121,.614-.306,.869-.561l5.086-5.086c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-5.086,5.086c-.163,.163-.356,.269-.561,.341V.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5V22.073c-.204-.072-.398-.178-.561-.341l-5.086-5.086c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l5.086,5.086c.255,.255,.552,.439,.869,.561H5.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h13c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Z"/></svg>
);

FiTrArrowToBottom.displayName = 'FiTrArrowToBottom';
