import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockDesk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,20c5.514,0,10-4.486,10-10v-.5h-.013c-.261-5.283-4.641-9.5-9.987-9.5S2.274,4.217,2.013,9.5h-.013v.5c0,5.514,4.486,10,10,10Zm-1-10.554v-4.446h2v5.554l-4.47,2.794-1.061-1.696,3.53-2.206Zm11,7.18v7.375H2v-7.375c2.151,3.237,5.83,5.375,10,5.375s7.849-2.138,10-5.375Z"/>
</svg>

);
