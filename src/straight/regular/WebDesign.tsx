import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WebDesign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,5.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm5.5,1.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm15.5-3v19H0V4C0,2.346,1.346,1,3,1h18c1.654,0,3,1.346,3,3Zm-22,0v4h20v-4c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1Zm12,6H2v4.5h12v-4.5ZM2,21h12v-4.5H2v4.5Zm20,0v-11h-6v11h6Z"/>
</svg>

);
