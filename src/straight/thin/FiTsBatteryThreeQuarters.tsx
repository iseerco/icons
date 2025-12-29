import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBatteryThreeQuarters = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,20H0V4H19.5c1.379,0,2.5,1.122,2.5,2.5v1.5h2v8h-2v1.5c0,1.378-1.121,2.5-2.5,2.5ZM1,19H19.5c.827,0,1.5-.673,1.5-1.5v-2.5h2v-6h-2v-2.5c0-.827-.673-1.5-1.5-1.5H1v14Zm14-2H3V7H15v10Zm-11-1H14V8H4v8Z"/></svg>

);
