import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGlassHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.014,0l1.71,20.787c.147,1.802,1.68,3.213,3.488,3.213h11.459c1.827,0,3.326-1.373,3.486-3.193L22.986,0H1.014Zm18.697,3l-.615,7H4.847l-.576-7h15.439Zm-2.04,18H6.212c-.258,0-.478-.201-.498-.459l-.62-7.541h13.738l-.663,7.544c-.023.26-.237.456-.498.456Z"/>
</svg>

);
