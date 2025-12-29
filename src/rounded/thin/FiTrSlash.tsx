import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,24c-.13,0-.26-.05-.35-.15L.15,.85C-.05,.66-.05,.34,.15,.15S.66-.05,.85,.15L23.85,23.15c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"/></svg>

);
