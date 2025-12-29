import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.707,0H4.5c-1.379,0-2.5,1.122-2.5,2.5V24H22V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707ZM3,23V2.5c0-.827,.673-1.5,1.5-1.5H14v7h7v15H3ZM12,10c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm3.45,2.977l-2.95,1.264v-3.211c1.257,.157,2.334,.9,2.95,1.946Zm-3.45,6.023c-2.206,0-4-1.794-4-4,0-2.036,1.529-3.722,3.5-3.969v4.727l4.345-1.862c.101,.351,.155,.721,.155,1.104,0,2.206-1.794,4-4,4Z"/></svg>

);
