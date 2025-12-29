import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BarcodeScan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,14h2v9H2V14Zm15,9h2V14h-2v9Zm-8,0h2V14h-2v9Zm-4,0h3V14h-3v9Zm8,0h3V14h-3v9Zm7,0h2V14h-2v9Zm2-13V1h-2V10h-1V1h-2V10h-1V1h-3V10h-2V1h-2V10h-1V1h-3V10h-1V1H2V10H0v2H24v-2h-2Z"/></svg>

);
