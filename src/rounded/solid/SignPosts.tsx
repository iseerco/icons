import React from 'react';
import type { IconProps } from '../../types';

export const SignPosts: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,2.424v-1.424c0-.553-.448-1-1-1s-1,.447-1,1v1H5v-1c0-.553-.448-1-1-1s-1,.447-1,1v1.424C1.237,3.198,0,4.955,0,7v6c0,2.045,1.237,3.802,3,4.576v5.424c0,.553.448,1,1,1s1-.447,1-1v-5h14v5c0,.553.448,1,1,1s1-.447,1-1v-5.424c1.763-.774,3-2.531,3-4.576v-6c0-2.045-1.237-3.802-3-4.576Z"/>
</svg>
);

SignPosts.displayName = 'SignPosts';
