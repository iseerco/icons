import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24V3.5A3.5,3.5,0,0,0,20.5,0ZM21,21H3V3.5A.5.5,0,0,1,3.5,3h17a.5.5,0,0,1,.5.5Zm-7.922-5.094-2.121,2.121L6.714,13.785a2.5,2.5,0,0,1,0-3.535l4.243-4.243,2.121,2.121-2.39,2.389h7.329v3H10.688Z"/></svg>

);
