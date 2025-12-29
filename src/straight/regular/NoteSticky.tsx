import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoteSticky = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H17.41l6.59-6.59V3c0-1.65-1.35-3-3-3ZM2,3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v13h-6v6H2V3Zm18.59,15l-2.59,2.59v-2.59h2.59Z"/></svg>

);
