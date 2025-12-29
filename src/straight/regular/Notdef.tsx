import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Notdef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,0H6c-1.65,0-3,1.35-3,3V24H21V3c0-1.65-1.35-3-3-3Zm-7.24,12l-5.76,7.92V4.07l5.76,7.92Zm1.24,1.7l6.04,8.3H5.96l6.04-8.3Zm1.24-1.7l5.76-7.92v15.85l-5.76-7.92ZM18,2s.02,0,.03,0l-6.03,8.29L5.97,2.01s.02,0,.03,0h12Z"/></svg>

);
