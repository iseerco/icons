import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBanner4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6h-7v2H7v-2H0l3.111,4L0,14h4v4h16v-4h4l-3.111-4,3.111-4Zm-7,9H7v-4h10v4Z"/>
</svg>

);
