import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMemo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.5,0h-7C5.468,0,3,2.468,3,5.5v13c0,3.032,2.468,5.5,5.5,5.5h7c3.032,0,5.5-2.468,5.5-5.5V5.5c0-3.032-2.468-5.5-5.5-5.5Zm2.5,18.5c0,1.379-1.121,2.5-2.5,2.5h-7c-1.379,0-2.5-1.121-2.5-2.5V5.5c0-1.379,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.121,2.5,2.5v13Zm-2-12c0,.828-.672,1.5-1.5,1.5h-5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h5c.828,0,1.5.672,1.5,1.5Zm0,5c0,.828-.672,1.5-1.5,1.5h-5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h5c.828,0,1.5.672,1.5,1.5Zm-3,5c0,.828-.672,1.5-1.5,1.5h-2c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h2c.828,0,1.5.672,1.5,1.5Z"/></svg>

);
