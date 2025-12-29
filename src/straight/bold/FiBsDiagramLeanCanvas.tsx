import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiagramLeanCanvas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,1H3.5C1.57,1,0,2.57,0,4.5V23H24V4.5c0-1.93-1.57-3.5-3.5-3.5Zm0,3c.28,0,.5,.22,.5,.5V15h-2V4h1.5ZM7,11.5h2v3.5h-2v-3.5Zm8,0h2v3.5h-2v-3.5Zm2-7.5v4.5h-2V4h2Zm-4,0V15h-2V4h2Zm-4,0v4.5h-2V4h2Zm-5.5,0h1.5V15H3V4.5c0-.28,.22-.5,.5-.5Zm-.5,16v-2H11v2H3Zm10,0v-2h8v2H13Z"/></svg>

);
