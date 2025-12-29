import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDesktopArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10.5,7V0h3v7h3l-3.793,3.707c-.391.391-1.024.391-1.414,0l-3.793-3.707h3Zm13.5,12V3c0-1.654-1.346-3-3-3h-5v3h5v10H3V3h5V0H3C1.346,0,0,1.346,0,3v16h10.5v2h-4.5v3h12v-3h-4.5v-2h10.5Z"/>
</svg>

);
