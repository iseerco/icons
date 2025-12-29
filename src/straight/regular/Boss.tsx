import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Boss = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,10c2.757,0,5-2.243,5-5S14.757,0,12,0s-5,2.243-5,5,2.243,5,5,5Zm0-8c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm8,17v-3c0-2.757-2.243-5-5-5h-6c-2.757,0-5,2.243-5,5v3H0v2h2v3h2v-3h16v3h2v-3h2v-2h-4Zm-10,0h-4v-3c0-1.654,1.346-3,3-3h.656l1.442,2.164-1.099,3.836Zm8,0h-4l-1.099-3.836,1.442-2.164h.656c1.654,0,3,1.346,3,3v3Z"/>
</svg>

);
