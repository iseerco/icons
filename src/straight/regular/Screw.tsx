import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0H6v3.914l3,3v14.058l3,3,3-3V6.914l3-3V0Zm-7,13.414l2-2v2.682l-2,2.073v-2.755Zm2-4.828l-2,2v-3.586h2v1.586Zm-1,12.558l-1-1v-1.094l2-2.073v3.167l-1,1ZM16,3.086l-1.914,1.914h-4.172l-1.914-1.914v-1.086h8v1.086Z"/>
</svg>

);
