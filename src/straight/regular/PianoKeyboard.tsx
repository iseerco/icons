import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PianoKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2H3c-1.654,0-3,1.346-3,3v17h24V5c0-1.654-1.346-3-3-3ZM3,4h18c.551,0,1,.449,1,1v6H2v-6c0-.551.449-1,1-1Zm-1,16v-7h3v4h2v-4h2v4h2v-4h2v4h2v-4h2v4h2v-4h3v7H2Z"/>
</svg>

);
