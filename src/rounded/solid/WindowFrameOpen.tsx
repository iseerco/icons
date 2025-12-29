import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrameOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,22h-1v-8c0-.552-.447-1-1-1H3c-.552,0-1,.448-1,1v8h-1c-.552,0-1,.448-1,1s.448,1,1,1h22c.553,0,1-.448,1-1s-.447-1-1-1Zm-12-11H3c-.552,0-1-.448-1-1v-5.5C2,2.015,4.015,0,6.5,0h4.5v11Zm11-6.5v5.5c0,.552-.448,1-1,1h-8V0h4.5c2.485,0,4.5,2.015,4.5,4.5Z"/>
</svg>

);
