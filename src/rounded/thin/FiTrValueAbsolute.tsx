import React from 'react';
import type { IconProps } from '../../types';

export const FiTrValueAbsolute: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17.854,6.854l-5.146,5.146,5.146,5.146c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-5.146-5.146-5.146,5.146c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l5.146-5.146-5.146-5.146c-.195-.195-.195-.512,0-.707s.512-.195.707,0l5.146,5.146,5.146-5.146c.195-.195.512-.195.707,0s.195.512,0,.707ZM.5,0C.224,0,0,.224,0,.5v23c0,.276.224.5.5.5s.5-.224.5-.5V.5c0-.276-.224-.5-.5-.5Zm23,0c-.276,0-.5.224-.5.5v23c0,.276.224.5.5.5s.5-.224.5-.5V.5c0-.276-.224-.5-.5-.5Z"/></svg>
);

FiTrValueAbsolute.displayName = 'FiTrValueAbsolute';
