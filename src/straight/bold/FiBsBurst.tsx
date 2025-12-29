import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBurst = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24.044,11.891l-4.929-2.632,3.562-7.034-7.386,3.127L12.395-.078l-2.789,5.238L.214,.164,5.611,9.27-.078,12.075l5.855,2.586-2.169,5.911,5.939-2.041,2.971,5.55,2.755-5.385,8.009,3.958-4.078-8.173,4.841-2.589Zm-7.429,4.122l-2.667-1.317-1.491,2.916-1.471-2.747-2.389,.821,.966-2.631-2.555-1.128,2.834-1.397-1.595-2.691,2.596,1.382,1.553-2.917,1.539,2.883,2.36-1-1.184,2.336,2.567,1.372-2.464,1.318,1.398,2.802Z"/>
</svg>

);
