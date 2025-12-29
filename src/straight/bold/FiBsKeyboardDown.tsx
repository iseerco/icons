import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKeyboardDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v15h24V3c0-1.654-1.346-3-3-3Zm0,15H3V3h18v12Zm-13-7h-3v-3h3v3Zm5,0h-3v-3h3v3Zm6,0h-4v-3h4v3Zm-6,5H5v-3h8v3Zm6,0h-4v-3h4v3Zm-11.157,7h8.302l-3.321,3.629c-.443.494-1.217.494-1.66,0l-3.321-3.629Z"/>
</svg>

);
