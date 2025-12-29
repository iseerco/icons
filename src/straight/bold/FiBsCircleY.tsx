import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.037,9,9-4.037,9-9,9Zm5.867-14.212l-4.367,6.112v5.099h-3v-5.099l-4.367-6.112h3.721l2.146,3.003,2.146-3.003h3.721Z"/></svg>

);
