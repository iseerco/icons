import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardSpade = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,0h-8C5.243,0,3,2.243,3,5v14c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,15c-.558,0-1.062-.23-1.425-.599.194.657.452,1.275.798,1.813.219.341-.003.785-.407.785h-1.931c-.405,0-.626-.445-.407-.785.346-.539.604-1.156.798-1.813-.363.369-.867.599-1.425.599-1.105,0-2-.895-2-2,0-2.333,4-5,4-5,0,0,4,2.667,4,5,0,1.105-.895,2-2,2Z"/>
</svg>

);
