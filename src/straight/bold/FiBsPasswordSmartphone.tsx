import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPasswordSmartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,18H3V3h13V0H0v21c0,1.657,1.343,3,3,3h10c1.657,0,3-1.343,3-3v-5h-3v2Zm-3,4.015h-4.002v-2.015h4.002v2.015ZM5,5v9h19V5H5Zm6.414,5.53l-1.414,1.414-1.03-1.03-1.03,1.03-1.414-1.414,1.03-1.03-1.03-1.03,1.414-1.414,1.03,1.03,1.03-1.03,1.414,1.414-1.03,1.03,1.03,1.03Zm5.559,0l-1.414,1.414-1.03-1.03-1.03,1.03-1.414-1.414,1.03-1.03-1.03-1.03,1.414-1.414,1.03,1.03,1.03-1.03,1.414,1.414-1.03,1.03,1.03,1.03Zm5.558,0l-1.414,1.414-1.03-1.03-1.03,1.03-1.414-1.414,1.03-1.03-1.03-1.03,1.414-1.414,1.03,1.03,1.03-1.03,1.414,1.414-1.03,1.03,1.03,1.03Z"/>
</svg>

);
