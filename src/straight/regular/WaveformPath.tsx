import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaveformPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,7h2v10h-2V7Zm-4,17h2V0h-2v24ZM21,4v16h2V4h-2Zm-12,16h2V4h-2v16Zm-4-3h2V7h-2v10Zm-4-2h2v-6H1v6Z"/></svg>

);
