import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CrateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,24.003h14c2.76,0,5-2.24,5-5H0c0,2.76,2.24,5,5,5Zm19-7v-2c0-1.65-1.35-3-3-3H3c-1.65,0-3,1.35-3,3v2h24Z"/>
</svg>

);
