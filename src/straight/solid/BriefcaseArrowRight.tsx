import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BriefcaseArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,4h-3V2c0-1.1-.9-2-2-2H8c-1.1,0-2,.9-2,2v2H3c-1.65,0-3,1.35-3,3V24H24V7c0-1.65-1.35-3-3-3ZM8,2h8v2H8V2Zm9.41,13.41l-4.24,4.24-1.41-1.41,3.24-3.24H6v-2H15l-3.24-3.24,1.41-1.41,4.24,4.24c.78,.78,.78,2.05,0,2.83Z"/></svg>

);
