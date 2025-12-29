import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InputText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,9c-.054,0-.101.037-.113.09l-.906,3.91h2.039l-.906-3.91c-.012-.053-.059-.09-.113-.09Z"/><path d="m21,3H3c-1.654,0-3,1.346-3,3v15h24V6c0-1.654-1.346-3-3-3Zm-11.053,14l-.464-2h-2.967l-.464,2h-2.053l1.939-8.362c.287-1.237,1.625-2.008,2.937-1.458.627.263,1.049.866,1.202,1.528l1.922,8.291h-2.053Z"/></svg>

);
