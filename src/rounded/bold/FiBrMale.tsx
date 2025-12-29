import React from 'react';
import type { IconProps } from '../../types';

export const FiBrMale: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M437.46,0h-85.189c-17.643,0-31.946,14.303-31.946,31.946s14.303,31.946,31.946,31.946h50.666L285.185,181.644  c-82.229-57.281-195.324-37.057-252.605,45.171S-4.477,422.139,77.751,479.42s195.324,37.057,252.605-45.171  c43.419-62.328,43.419-145.105,0-207.434l117.752-117.752v50.666c0,17.643,14.303,31.946,31.946,31.946S512,177.372,512,159.729  V74.54C512,33.373,478.627,0,437.46,0z M181.893,447.241c-64.692,0-117.135-52.443-117.135-117.135s52.443-117.135,117.135-117.135  s117.135,52.443,117.135,117.135C298.958,394.769,246.556,447.171,181.893,447.241z"/>
</svg>
);

FiBrMale.displayName = 'FiBrMale';
