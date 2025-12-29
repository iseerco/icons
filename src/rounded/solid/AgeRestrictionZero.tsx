import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AgeRestrictionZero = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,9c-.827,0-1.5.673-1.5,1.5v3c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5Z"/>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,13.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-3c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v3Zm6-.5h-1v1c0,.552-.447,1-1,1s-1-.448-1-1v-1h-1c-.553,0-1-.448-1-1s.447-1,1-1h1v-1c0-.552.447-1,1-1s1,.448,1,1v1h1c.553,0,1,.448,1,1s-.447,1-1,1Z"/>
</svg>

);
