import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.74,17.39l-.72-.54,1.3-4.08-3.32-1.85v-.92h4.35l1.18-4.5h.97l1.18,4.5h4.33v.92l-3.3,1.91,1.33,4.03-.75,.52-3.26-2.52-3.27,2.53ZM24,3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5ZM3,3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5V21H3V3.5Z"/></svg>

);
