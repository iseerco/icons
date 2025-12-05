import React from 'react';
import type { IconProps } from '../../types';

export const RectanglePanoramic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 18.474c-4.961 0-9.152-.615-9.329-.641-.353-.053-.65-.289-.782-.62-.036-.091-.889-2.272-.889-5.213 0-2.916.852-5.118.888-5.21.131-.333.43-.571.784-.624.176-.026 4.378-.641 9.328-.641s9.152.615 9.329.641c.353.053.65.289.782.62.036.091.889 2.272.889 5.213 0 2.916-.852 5.118-.888 5.21-.131.333-.43.571-.784.624-.176.026-4.378.641-9.328.641z" opacity=".5"/></svg>
);

RectanglePanoramic.displayName = 'RectanglePanoramic';
