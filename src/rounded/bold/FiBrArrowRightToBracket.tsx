import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowRightToBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.5v13c0,3.03-2.47,5.5-5.5,5.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c1.38,0,2.5-1.12,2.5-2.5V5.5c0-1.38-1.12-2.5-2.5-2.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c3.03,0,5.5,2.47,5.5,5.5Zm-6,6.5c0-.94-.36-1.81-1-2.45l-4.41-4.59c-.58-.6-1.52-.62-2.12-.04-.6,.57-.62,1.52-.04,2.12l3.33,3.46H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H13.75l-3.33,3.46c-.57,.6-.56,1.55,.04,2.12,.29,.28,.67,.42,1.04,.42,.39,0,.79-.15,1.08-.46l4.39-4.56c.66-.66,1.03-1.54,1.03-2.48Z"/></svg>

);
