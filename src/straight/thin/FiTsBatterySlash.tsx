import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBatterySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,17.5v-1.5h2V8h-2v-1.5c0-1.378-1.121-2.5-2.5-2.5H4.707L.753,.046,.046,.753,23.246,23.954l.707-.707-3.455-3.455c.883-.386,1.502-1.268,1.502-2.292Zm-1,0c0,.761-.57,1.392-1.306,1.487L5.707,5h13.793c.827,0,1.5,.673,1.5,1.5v2.5h2v6h-2v2.5Zm-5.536,1.5l1,1H0V4H.464l1,1h-.464v14H15.464Z"/></svg>

);
