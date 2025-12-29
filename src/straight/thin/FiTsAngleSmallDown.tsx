import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,16.074c-.4,0-.777-.156-1.061-.439l-5.281-5.281.707-.707,5.281,5.281c.189.189.518.189.707,0l5.281-5.281.707.707-5.281,5.281c-.283.283-.66.439-1.061.439Z"/>
</svg>

);
