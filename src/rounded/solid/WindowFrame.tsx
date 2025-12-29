import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23c0,.552-.448,1-1,1H1c-.552,0-1-.448-1-1s.448-1,1-1h1v-9h9v9h2v-9h9v9h1c.552,0,1,.448,1,1Zm-2-18.5c0-2.485-2.015-4.5-4.5-4.5h-4.5v11h9v-6.5ZM11,0h-4.5C4.015,0,2,2.015,2,4.5v6.5h9V0Z"/>
</svg>

);
