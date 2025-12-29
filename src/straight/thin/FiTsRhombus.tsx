import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,24L0,12,12,0l12,12-12,12ZM1.414,12l10.586,10.586,10.586-10.586L12,1.414,1.414,12Z"/>
</svg>

);
