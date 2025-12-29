import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPianoKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3.5,5h17c.276,0,.5.224.5.5v4.5H3v-4.5c0-.276.224-.5.5-.5Zm-.5,14v-6h2v4h3v-4h2v4h3v-4h3v4h3v-4h2v6H3Z"/>
</svg>

);
