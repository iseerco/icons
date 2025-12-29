import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flashlight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.414,14h-5.828l-4.586-4.586V3.586L13.5.086l10.414,10.414-3.5,3.5Zm-11.632-3.141L.626,19.016c-.834.834-.834,2.187,0,3.021l1.337,1.337c.834.834,2.187.834,3.021,0l8.156-8.157-4.359-4.359Zm-2.041,4.985l2-2,1.414,1.414-2,2-1.414-1.414Z"/>
</svg>

);
