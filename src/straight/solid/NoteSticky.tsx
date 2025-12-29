import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoteSticky = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,18h5.41l-5.41,5.41v-5.41ZM24,3v13h-8v8H0V3C0,1.35,1.35,0,3,0H21c1.65,0,3,1.35,3,3Z"/></svg>

);
