import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BriefcaseArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.41,12.59c.78,.78,.78,2.05,0,2.83l-4.24,4.24-1.41-1.41,3.24-3.24H6v-2H15l-3.24-3.24,1.41-1.41,4.24,4.24Zm6.59-5.59V24H0V7c0-1.65,1.35-3,3-3h3V2c0-1.1,.9-2,2-2h8c1.1,0,2,.9,2,2v2h3c1.65,0,3,1.35,3,3ZM8,4h8V2H8v2Zm14,3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1v15H22V7Z"/></svg>

);
