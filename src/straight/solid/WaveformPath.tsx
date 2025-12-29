import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaveformPath = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,17h-2V7h2v10ZM15,0h-2v24h2V0Zm8,4h-2v16h2V4Zm-12,0h-2v16h2V4Zm-4,3h-2v10h2V7Zm-4,2H1v6h2v-6Z"/></svg>

);
