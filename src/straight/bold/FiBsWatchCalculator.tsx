import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWatchCalculator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,2.351V0h-3v2h-8V0h-3v2.351c-1.178.564-2,1.758-2,3.149v13c0,1.391.822,2.585,2,3.149v2.351h3v-2h8v2h3v-2.351c1.178-.564,2-1.758,2-3.149V5.5c0-1.391-.822-2.585-2-3.149Zm-1,16.149c0,.276-.225.5-.5.5H6.5c-.275,0-.5-.224-.5-.5V5.5c0-.276.225-.5.5-.5h11c.275,0,.5.224.5.5v13Zm-10-6.5h2v2h-2v-2Zm3,0h2v2h-2v-2Zm3,0h2v2h-2v-2Zm-6,3h2v2h-2v-2Zm3,0h2v2h-2v-2Zm3,0h2v2h-2v-2Zm-6-8h8v3h-8v-3Z"/></svg>

);
