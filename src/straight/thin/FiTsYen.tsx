import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsYen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <polygon points="23.989 .632 23.196 .022 12 14.578 .804 .022 .011 .632 11.064 15 5 15 5 16 11.5 16 11.5 19 5 19 5 20 11.5 20 11.5 24 12.5 24 12.5 20 19 20 19 19 12.5 19 12.5 16 19 16 19 15 12.936 15 23.989 .632"/>
</svg>

);
