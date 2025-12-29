import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsQueue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <circle cx="12.5" cy="2.5" r="2.5"/>
  <circle cx="4.5" cy="2.5" r="2.5"/>
  <circle cx="20.5" cy="2.5" r="2.5"/>
  <path d="m19.5,6c-1.93,0-3.5,1.57-3.5,3.5v8.5h2v6h3v-6h2v-8.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,9h-1v-5.5c0-.276.224-.5.5-.5s.5.224.5.5v5.5Z"/>
  <path d="m11.5,6c-1.93,0-3.5,1.57-3.5,3.5v8.5h2v6h3v-6h2v-8.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,9h-1v-5.5c0-.276.224-.5.5-.5s.5.224.5.5v5.5Z"/>
  <path d="m3.5,6c-1.93,0-3.5,1.57-3.5,3.5v8.5h2v6h3v-6h2v-8.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,9h-1v-5.5c0-.276.224-.5.5-.5s.5.224.5.5v5.5Z"/>
</svg>

);
