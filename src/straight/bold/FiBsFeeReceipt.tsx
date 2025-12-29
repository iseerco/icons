import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFeeReceipt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,15h3v8.95l-3.945-2.399-2.556,1.776-2.5-1.739-2.5,1.739-2.555-1.778-3.945,2.396V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3H6v15.612l1.056-.642,2.444,1.702,2.5-1.739,2.5,1.739,2.445-1.7,1.054.642v-3.614Zm-6-8.4v-1.6h-3.5v8h1.6v-3h1.9v-1.6h-1.9v-1.801h1.9Zm4.5,0v-1.6h-3.5v8h3.5v-1.6h-1.9v-1.4h1.9v-1.6h-1.9v-1.801h1.9Zm1,6.4h3.5v-1.6h-1.9v-1.4h1.9v-1.6h-1.9v-1.801h1.9v-1.6h-3.5v8Z"/>
</svg>

);
