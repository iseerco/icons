import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.635,14.428l-5.281-5.281c-.189-.189-.518-.189-.707,0l-5.281,5.281-.707-.707,5.281-5.281c.566-.566,1.555-.566,2.121,0l5.281,5.281-.707.707Z"/>
</svg>

);
