import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotebookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H3V3H1v2H3v2H1v2H3v2H1v2H3v2H1v2H3v2H1v2H3v3H20c1.65,0,3-1.35,3-3V3c0-1.65-1.35-3-3-3ZM5,2h3V22h-3V2ZM21,21c0,.55-.45,1-1,1H10V2h10c.55,0,1,.45,1,1V21Z"/></svg>

);
