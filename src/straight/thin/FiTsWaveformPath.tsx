import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWaveformPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,7h1v10h-1V7Zm-4,17h1V0h-1v24ZM21,4v16h1V4h-1Zm-12,16h1V4h-1v16Zm-4-3h1V7h-1v10Zm-4-2h1v-6h-1v6Z"/></svg>

);
