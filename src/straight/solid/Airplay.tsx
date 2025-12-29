import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Airplay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.612,23H2.388l7.302-8.914c.577-.692,1.417-1.086,2.31-1.086h0c.893,0,1.733.394,2.304,1.08l7.308,8.92ZM3.079,19l5.063-6.182c.967-1.16,2.37-1.818,3.857-1.818s2.89.656,3.842,1.801l5.079,6.199h3.08V4c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v15h3.079Z"/>
</svg>

);
