import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.017,2.445c.262-.297,.623-.445,.983-.445s.721,.148,.983,.445l5.017,5.555h-5V24h-2V8H6L11.017,2.445ZM21,0H3V2H21V0Z"/></svg>

);
