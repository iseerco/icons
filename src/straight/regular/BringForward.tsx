import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BringForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,16H0V3C0,1.35,1.35,0,3,0H13c1.65,0,3,1.35,3,3v13ZM2,14H14V3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1V14Zm22-3c0-1.65-1.35-3-3-3h-3v2h3c.55,0,1,.45,1,1v11H10v-4h-2v6H24V11Z"/></svg>

);
