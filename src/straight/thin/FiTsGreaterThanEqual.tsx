import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGreaterThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,23h18v1H3v-1ZM3,0v1.092l16.264,8.408L3,17.879v1.121l18.5-9.5L3,0Z"/>
</svg>

);
