import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Boot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,5H0V0h17v5Zm2.046,7.155l-4.046-1.121v-.006h-5v-2h5v-2.028H2v17h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-5.733c0-2.969-2.113-5.546-4.954-6.112Z"/>
</svg>

);
