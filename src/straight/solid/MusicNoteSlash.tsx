import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MusicNoteSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.957,22.543l-1.414,1.414L.043,1.457,1.457.043l11.543,11.543V2.5c0-1.379,1.121-2.5,2.5-2.5h4.5v2h-4.5c-.275,0-.5.225-.5.5v11h-.086l9.043,9.043Zm-15.155-9.499c-2.704.344-4.802,2.66-4.802,5.456,0,3.032,2.468,5.5,5.5,5.5,2.796,0,5.112-2.098,5.456-4.802l-6.154-6.154Z"/>
</svg>

);
