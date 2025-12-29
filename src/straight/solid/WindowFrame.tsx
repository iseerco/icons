import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,22v2H0v-2h2v-9h9v9h2v-9h9v9h2Zm-2-19c0-1.654-1.346-3-3-3h-6v11h9V3ZM11,0h-6c-1.654,0-3,1.346-3,3v8h9V0Z"/>
</svg>

);
