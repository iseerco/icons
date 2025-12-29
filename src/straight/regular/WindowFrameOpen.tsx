import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrameOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,22v2H0v-2h2v-7h2v7h16v-7h2v7h2Zm-2-9H2V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v10Zm-18-2h7V2h-6c-.551,0-1,.449-1,1v8ZM20,3c0-.551-.448-1-1-1h-6v9h7V3Z"/>
</svg>

);
