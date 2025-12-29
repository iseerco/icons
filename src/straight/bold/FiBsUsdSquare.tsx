import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUsdSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.276,.225-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5V21Zm-5-11.5v.5h-3v-.5c0-.276-.225-.5-.5-.5h-1c-.275,0-.5,.224-.5,.5,0,.294,.177,.555,.45,.665l2.214,.886c1.419,.567,2.336,1.922,2.336,3.45,0,1.582-1.056,2.923-2.5,3.354v1.146h-3v-1.146c-1.444-.431-2.5-1.772-2.5-3.354v-.5h3v.5c0,.275,.225,.5,.5,.5h1c.275,0,.5-.225,.5-.5,0-.294-.177-.555-.45-.664l-2.214-.886c-1.419-.567-2.336-1.922-2.336-3.45,0-1.582,1.056-2.923,2.5-3.354v-1.146h3v1.146c1.444,.431,2.5,1.772,2.5,3.354Z"/></svg>

);
