import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLoopSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.918,10h-1.918v7.5c0,3.584-2.916,6.5-6.5,6.5H7.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h6c1.93,0,3.5-1.57,3.5-3.5v-7.5h-1.918c-.962,0-1.444-1.164-.764-1.844l3.417-3.241c.422-.422,1.106-.422,1.528,0l3.417,3.241c.681,.681,.199,1.844-.764,1.844Zm-12.236,5.844c.681-.681,.199-1.844-.764-1.844h-1.918V6.5c0-1.93,1.57-3.5,3.5-3.5h6c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5h-6c-3.584,0-6.5,2.916-6.5,6.5v7.5h-1.918c-.962,0-1.444,1.164-.764,1.844l3.417,3.241c.422,.422,1.106,.422,1.528,0l3.417-3.241Z"/>
</svg>

);
