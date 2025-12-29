import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrameOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23c0,.552-.447,1-1,1H1c-.552,0-1-.448-1-1s.448-1,1-1h1v-6c0-.552.448-1,1-1s1,.448,1,1v6h16v-6c0-.552.447-1,1-1s1,.448,1,1v6h1c.553,0,1,.448,1,1ZM2,12v-7C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5v7c0,.552-.447,1-1,1H3c-.552,0-1-.448-1-1ZM17,2h-4v9h7v-6c0-1.654-1.346-3-3-3ZM4,11h7V2h-4c-1.654,0-3,1.346-3,3v6Z"/>
</svg>

);
