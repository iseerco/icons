import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.357,1.613c-.689-.779-2.024-.78-2.714,0l-5.769,6.388h6.625V24h1V8h6.625L13.357,1.613Zm-1.97,.667l.003-.003c.315-.356,.899-.36,1.221,.003l4.263,4.72H7.125L11.388,2.28ZM21,0V1H3V0H21Z"/></svg>

);
