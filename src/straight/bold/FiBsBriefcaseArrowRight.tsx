import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBriefcaseArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,3h-2.5v-.5c0-1.38-1.12-2.5-2.5-2.5h-7c-1.38,0-2.5,1.12-2.5,2.5v.5H3.5c-1.93,0-3.5,1.57-3.5,3.5V24H24V6.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,18H3V6.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v14.5Zm-3.25-8.21c.39,.39,.39,1.02,0,1.41l-3.71,3.79v-3H6.04v-3h8v-3l3.71,3.79Z"/></svg>

);
