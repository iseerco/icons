import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pepper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11v1A12,12,0,1,1,.207,9.819L.357,9H2.2l.129.849C2.691,12.2,3.848,15,7.319,15,9.62,15,12,13.5,12,11a5.962,5.962,0,0,1,1.22-3.612,4.969,4.969,0,0,0,9.56,0A5.962,5.962,0,0,1,24,11ZM16.8,5.136A5.99,5.99,0,0,0,15.02,5.8c0,.068-.02.132-.02.2a3,3,0,0,0,6,0c0-.069-.016-.133-.02-.2a6,6,0,0,0-2.144-.738C18.239,1.6,16.056,0,14,0V2C15.174,2,16.347,3.08,16.8,5.136Z"/></svg>

);
