import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrWaffle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.038,9-9,9Zm5.5-8h-1.5v-2h1.5c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5h-1.5v-1.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v1.5h-2v-1.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v1.5h-1.5c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h1.5v2h-1.5c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h1.5v1.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-1.5h2v1.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-1.5h1.5c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Zm-6.5,0v-2h2v2h-2Z"/>
</svg>

);
