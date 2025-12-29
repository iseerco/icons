import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,9.21L.15,4.35l.71-.71L5,7.79,12,.79l5,5L22.65,.15l.71,.71-6.35,6.35L12,2.21l-7,7Zm2,4.79h-1v10h1V14Zm-5-2H1v12h1V12Zm10-4h-1V24h1V8Zm5,3h-1v13h1V11Zm5-4h-1V24h1V7Z"/></svg>

);
