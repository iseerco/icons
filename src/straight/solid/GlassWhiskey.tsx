import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassWhiskey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.49,16l-.43,4.299c-.153,1.54-1.437,2.701-2.985,2.701H4.804c-1.559,0-2.843-1.17-2.987-2.721l-.399-4.279h21.072Zm.2-2l1.301-13H.018l1.213,13h21.459Z"/></svg>

);
