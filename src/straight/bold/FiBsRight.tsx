import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,24.04v-7.04H0V7H13V-.01l10.03,9.68c.63,.62,.97,1.45,.97,2.33,0,.88-.34,1.71-.97,2.33l-10.03,9.7ZM3,14h13v2.96l4.93-4.77c.06-.06,.07-.14,.07-.19s-.01-.13-.08-.2l-4.92-4.75v2.95H3v4Z"/></svg>

);
