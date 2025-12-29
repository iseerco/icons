import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BrowserUi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,5.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm5.5,1.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm15.5-3v19H0V4C0,2.346,1.346,1,3,1h18c1.654,0,3,1.346,3,3Zm-22,0v4h20v-4c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1Zm20,17v-11H2v11h20Zm-7-2h2v-7h-2v7Zm-4-3c0,.551-.449,1-1,1s-1-.449-1-1v-4h-2v4c0,1.654,1.346,3,3,3s3-1.346,3-3v-4h-2v4Z"/>
</svg>

);
