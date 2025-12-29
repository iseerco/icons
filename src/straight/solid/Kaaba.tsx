import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Kaaba = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.001,5.464L12,.164l9.999,5.3-9.999,5.3L2.001,5.464Zm20.999,6.395v6.146l-11,5.831L1,18.005v-6.175l4,2.127v-2.264l-4-2.128v-2.366l11,5.83,11-5.83v2.399l-4,2.194v2.264l4-2.196Zm-12,3.014l-4-2.121v2.264l4,2.121v-2.264Zm6-2.022l-4,2.041v2.264l4-2.041v-2.264Z"/>
</svg>

);
