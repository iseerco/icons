import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPianoKeyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,2H2.5c-1.378,0-2.5,1.122-2.5,2.5v17.5h24V4.5c0-1.378-1.122-2.5-2.5-2.5ZM2.5,3h19c.827,0,1.5.673,1.5,1.5v8.5H1V4.5c0-.827.673-1.5,1.5-1.5Zm-1.5,18v-7h3v4h1v-4h2v4h1v-4h2v4h1v-4h2v4h1v-4h2v4h1v-4h2v4h1v-4h3v7H1Z"/>
</svg>

);
