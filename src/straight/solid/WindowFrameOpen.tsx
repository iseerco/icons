import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrameOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,11H2V3c0-1.654,1.346-3,3-3h6v11ZM19,0h-6v11h9V3c0-1.654-1.346-3-3-3Zm5,22v2H0v-2h2v-9h20v9h2Z"/>
</svg>

);
