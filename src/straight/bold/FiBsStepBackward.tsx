import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStepBackward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,.063L6,10.19V0h-3v24h3v-10.19l15,10.127V.063Zm-3,18.229l-9.319-6.292,9.319-6.292v12.583Z"/></svg>

);
