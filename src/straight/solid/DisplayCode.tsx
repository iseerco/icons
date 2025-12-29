import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplayCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V4c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v15H11v2H6v2h12v-2h-5v-2h11ZM13.706,6.709l1.414-1.414,3.298,3.299c.775,.775,.775,2.037,0,2.812l-3.299,3.299-1.414-1.414,3.298-3.299-3.298-3.283Zm-3.411,6.582l-1.414,1.414-3.298-3.299c-.775-.775-.775-2.037,0-2.812l3.299-3.299,1.414,1.414-3.298,3.299,3.298,3.283Z"/></svg>

);
