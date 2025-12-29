import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSensorAlert = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5V20l-3-5.541V3.5c0-.276-.225-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21h3.464l-1.75,3H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5ZM8,6.5c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm5,0c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm2.5,2.5l8.5,14.985H7.038L15.5,9Zm1.5,11h-3v2h3v-2Zm0-6h-3v4h3v-4Z"/></svg>

);
