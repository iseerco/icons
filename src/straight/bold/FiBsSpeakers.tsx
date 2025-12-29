import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSpeakers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,13c.353,0,.686.072,1,.184v5.633c-.314.112-.647.184-1,.184-1.657,0-3-1.343-3-3s1.343-3,3-3Zm-2-6c0,1.105.895,2,2,2,.366,0,.705-.106,1-.277v-3.445c-.295-.172-.634-.277-1-.277-1.105,0-2,.895-2,2ZM24,3v21h-14V3c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3Zm-3,0h-8v18h8V3Zm-4,16c1.657,0,3-1.343,3-3s-1.343-3-3-3-3,1.343-3,3,1.343,3,3,3Zm0-10c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2ZM0,3v21h8v-3H3V3h5c0-1.13.391-2.162,1.026-3H3C1.346,0,0,1.346,0,3Z"/></svg>

);
