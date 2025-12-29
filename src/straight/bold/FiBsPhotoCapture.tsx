import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPhotoCapture = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3.5,21h3.5v3h-3.5c-1.93,0-3.5-1.57-3.5-3.5v-3.5h3v3.5c0,.275.225.5.5.5Zm17.5-.5c0,.275-.225.5-.5.5h-3.5v3h3.5c1.93,0,3.5-1.57,3.5-3.5v-3.5h-3v3.5Zm-.5-20.5h-3.5v3h3.5c.275,0,.5.225.5.5v3.5h3v-3.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.275.225-.5.5-.5h3.5V0h-3.5C1.57,0,0,1.57,0,3.5v3.5h3v-3.5Zm15,8.5c0,3.309-2.691,6-6,6s-6-2.691-6-6,2.691-6,6-6,6,2.691,6,6Zm-3,0c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Z"/>
</svg>

);
