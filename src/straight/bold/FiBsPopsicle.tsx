import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPopsicle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,9C21,4.038,16.963,0,12,0S3,4.038,3,9v11h7.5v4h3v-4h7.5v-11Zm-3,8h-4.5v-8h-3v8h-4.5v-8c0-3.309,2.691-6,6-6s6,2.691,6,6v8Z"/>
</svg>

);
