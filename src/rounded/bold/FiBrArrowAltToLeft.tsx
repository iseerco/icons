import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,10.5H10v-3.587c0-.811-.994-1.218-1.575-.644L3.234,11.356c-.114,.113-.192,.248-.234,.391V4.5c0-.829-.671-1.5-1.5-1.5s-1.5,.671-1.5,1.5v15c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-7.247c.042,.143,.12,.278,.234,.391l5.191,5.087c.581,.574,1.575,.167,1.575-.644v-3.587h12.5c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5Z"/></svg>

);
