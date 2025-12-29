import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRankingPodiumEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,11h-4v-5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v3H3c-1.654,0-3,1.346-3,3v9h24v-7c0-1.654-1.346-3-3-3Zm-18,1h4v6H3v-6Zm7-6h4v12h-4V6Zm11,12h-4v-4h4v4Z"/>
</svg>
);

FiBsRankingPodiumEmpty.displayName = 'FiBsRankingPodiumEmpty';
