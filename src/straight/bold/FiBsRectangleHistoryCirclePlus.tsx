import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRectangleHistoryCirclePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.721,24H0v-10.5c0-1.93,1.57-3.5,3.5-3.5h14.5c-2.525,0-4.773,1.173-6.24,3H3.5c-.276,0-.5.225-.5.5v7.5h7.587c.471,1.162,1.208,2.185,2.134,3Zm11.279-6c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-2-1h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Zm-1-12H3v3h18v-3Zm-3-5H6v3h12V0Z"/>
</svg>

);
