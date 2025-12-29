import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpRightAndArrowDownLeftFromCenter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.207,15.207l-6.793,6.793h4.586v2H2c-1.103,0-2-.897-2-2v-6H2v4.586l6.793-6.793,1.414,1.414ZM22,0h-6V2h4.586l-6.793,6.793,1.414,1.414,6.793-6.793v4.586h2V2c0-1.103-.897-2-2-2Z"/></svg>

);
