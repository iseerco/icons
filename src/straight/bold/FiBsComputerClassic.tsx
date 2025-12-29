import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsComputerClassic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5C2.57,0,1,1.57,1,3.5v14c0,1.76,1.306,3.221,3,3.464v3.036h16v-3.036c1.694-.243,3-1.704,3-3.464V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17.5c0,.275-.224.5-.5.5H4.5c-.276,0-.5-.225-.5-.5V3.5c0-.276.224-.5.5-.5h15c.276,0,.5.224.5.5v14ZM6,5h12v6H6v-6Zm3,9.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm2-1.5h7v3h-7v-3Z"/>
</svg>

);
