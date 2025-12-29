import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKeyboardLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3v3h-15v12h15v3H6V6c0-1.654,1.346-3,3-3h15Zm-13,5v3h3v-3h-3Zm5,0v3h3v-3h-3Zm5,3h3v-3h-3v3Zm-10,5h13v-3h-13v3ZM.371,12.825l3.629,3.321V7.843L.371,11.164c-.494.443-.494,1.217,0,1.66Z"/>
</svg>

);
