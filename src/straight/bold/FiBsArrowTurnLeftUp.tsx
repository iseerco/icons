import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowTurnLeftUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,21v3H11.5c-1.93,0-3.5-1.57-3.5-3.5V4.652L3.557,9.064,1.443,6.936,7.664,.758c1.011-1.01,2.662-1.01,3.676,.004l6.217,6.173-2.114,2.129-4.443-4.412v15.848c0,.276,.224,.5,.5,.5h10.5Z"/>
</svg>

);
