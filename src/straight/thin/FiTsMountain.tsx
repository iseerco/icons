import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMountain = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12-.071L0,22.658v1.342h24v-1.342L12-.071Zm4.492,10.649l-1.382,2.716-2.024-3.141-2.677,4.355-2.814-4.092L12,2.071l4.492,8.508Zm6.508,12.421H1v-.094l6.067-11.492,3.388,4.927,2.65-4.311,2.106,3.268,1.852-3.637,5.937,11.245v.094Z"/>
</svg>

);
