import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowTurnDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,3V13c0,.55-.45,1-1,1H2.88l4.86-5.33-1.48-1.35L.62,13.51c-.82,.82-.82,2.15-.03,2.94l5.68,6.22,1.48-1.35-4.86-5.33H21c1.65,0,3-1.35,3-3V3h-2Z"/></svg>

);
