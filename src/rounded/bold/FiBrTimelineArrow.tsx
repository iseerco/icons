import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTimelineArrow: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m23.717 12.685-3.063 3.063c-.61.61-1.653.178-1.653-.685v-1.563h-9.001v3.5h.5c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h.5v-3.5h-5.5c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5h.5v-3.5h-.5c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h4c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-.5v3.5h7v-3.5h-.5c-.828 0-1.5-.672-1.5-1.5v-4c0-.828.672-1.5 1.5-1.5h4c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5h-.5v3.5h4.001v-1.563c0-.863 1.043-1.295 1.653-.685l3.063 3.063c.378.378.378.991 0 1.369z"/></svg>
);

FiBrTimelineArrow.displayName = 'FiBrTimelineArrow';
