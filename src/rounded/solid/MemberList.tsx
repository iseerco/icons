import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MemberList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,11h-5c-1.654,0-3,1.346-3,3v7c0,1.654,1.346,3,3,3h5c1.654,0,3-1.346,3-3v-7c0-1.654-1.346-3-3-3Zm-1,9h-3c-.553,0-1-.448-1-1s.447-1,1-1h3c.553,0,1,.448,1,1s-.447,1-1,1Zm0-4.003h-3c-.553,0-1-.448-1-1s.447-1,1-1h3c.553,0,1,.448,1,1s-.447,1-1,1ZM3,6C3,2.691,5.691,0,9,0s6,2.691,6,6-2.691,6-6,6S3,9.309,3,6ZM12.026,24H1c-.557,0-1.001-.46-1-1.017,.009-4.955,4.043-8.983,9-8.983h0c.688,0,1.356,.085,2,.232v6.768c0,1.13,.391,2.162,1.026,3Z"/>
</svg>

);
