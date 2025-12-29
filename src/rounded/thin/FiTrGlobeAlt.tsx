import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrGlobeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.5,16c4.411,0,8-3.589,8-8S16.911,0,12.5,0,4.5,3.589,4.5,8s3.589,8,8,8Zm0-15c3.86,0,7,3.14,7,7s-3.14,7-7,7-7-3.14-7-7S8.64,1,12.5,1Zm9.544,14.306c-2.302,2.983-5.781,4.694-9.544,4.694v3h5c.276,0,.5.224.5.5s-.224.5-.5.5H6.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5v-3.051C5.351,19.438.5,14.279.5,8,.5,5.132,1.525,2.353,3.387.175c.18-.21.495-.235.705-.055.21.179.235.495.055.705-1.707,1.997-2.647,4.545-2.647,7.176,0,6.065,4.935,11,11,11,3.451,0,6.641-1.569,8.752-4.306.169-.218.481-.259.702-.09.218.169.259.483.09.702Z"/>
</svg>

);
