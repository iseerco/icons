import React from 'react';
import type { IconProps } from '../../types';

export const EditMessage: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M23.256,.742c-.99-.99-2.6-.99-3.59,0l-7.668,7.667v3.59h3.59l7.667-7.667c.479-.48,.744-1.117,.744-1.795s-.264-1.316-.744-1.795Zm.744,5.675v13.583h-6.852l-3.848,3.18c-.361,.322-.824,.484-1.292,.484-.476,0-.955-.168-1.337-.507l-3.749-3.157H0V3C0,1.346,1.346,0,3,0h14.581l-7.581,7.581v6.419h6.418l7.583-7.583Z"/>
</svg>
);

EditMessage.displayName = 'EditMessage';
