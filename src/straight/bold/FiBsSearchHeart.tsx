import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSearchHeart: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M512,466.928L403.624,358.552c74.164-98.987,54.041-239.353-44.945-313.517S119.325-9.007,45.161,89.98  S-8.88,329.333,90.107,403.497c79.531,59.587,188.816,59.638,268.403,0.126L466.886,512L512,466.928z M65.745,225.121  c0-88.022,71.356-159.377,159.377-159.377S384.499,137.1,384.499,225.121s-71.356,159.377-159.377,159.377  C137.139,384.405,65.838,313.104,65.745,225.121z M320.195,203.34c0,55.081-95.626,122.72-95.626,122.72  s-95.626-67.64-95.626-122.72c-1.251-27.702,20.118-51.208,47.813-52.594c27.701,1.376,49.076,24.888,47.813,52.594  c-1.251-27.702,20.118-51.208,47.813-52.594C300.083,152.121,321.458,175.634,320.195,203.34z"/>
</svg>
);

FiBsSearchHeart.displayName = 'FiBsSearchHeart';
