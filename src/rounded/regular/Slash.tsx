import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Slash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,24c-.26,0-.51-.1-.71-.29L.29,1.71C-.1,1.32-.1,.68,.29,.29S1.32-.1,1.71,.29L23.71,22.29c.39,.39,.39,1.02,0,1.41-.2,.2-.45,.29-.71,.29Z"/></svg>

);
