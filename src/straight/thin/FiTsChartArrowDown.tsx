import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23.976l-21.5.024c-1.379,0-2.5-1.122-2.5-2.5V.024h1v21.476c0,.827.673,1.5,1.5,1.5l21.5-.024v1Zm-12-11.269l-7.854-7.854.707-.707,7.146,7.146,2.488-2.488,5.762,5.762,3.75-3.75v6.483c0,.938-.763,1.7-1.7,1.7h-6.483l3.726-3.726-5.055-5.055-2.488,2.488Zm11,.524l-4.769,4.769h4.069c.386,0,.7-.314.7-.7v-4.069Z"/>
</svg>

);
