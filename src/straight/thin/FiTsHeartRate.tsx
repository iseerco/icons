import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHeartRate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="16.527 22.416 11.953 5.266 7.521 18.951 4.665 12 0 12 0 11 5.335 11 7.41 16.049 12.047 1.734 16.541 18.584 18.618 11 24 11 24 12 19.382 12 16.527 22.416"/></svg>

);
