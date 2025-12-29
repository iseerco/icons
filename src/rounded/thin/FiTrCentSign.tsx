import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCentSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.97,17.52c-1.43,2.76-4.25,4.48-7.35,4.48h-.61v1.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-1.5h-.5c-4.69,0-8.5-3.81-8.5-8.5v-3C3,5.81,6.81,2,11.5,2h.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v1.5h.61c3.16,0,6,1.76,7.41,4.6,.12,.25,.02,.55-.23,.67-.25,.12-.55,.02-.67-.23-1.24-2.49-3.74-4.04-6.52-4.04h-2.11c-4.14,0-7.5,3.36-7.5,7.5v3c0,4.14,3.36,7.5,7.5,7.5h2.11c2.73,0,5.21-1.51,6.46-3.94,.13-.25,.43-.34,.67-.21s.34,.43,.21,.67Z"/></svg>

);
