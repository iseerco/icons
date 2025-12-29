import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDumbbellHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,11.5h-2V5.5c0-1.378-1.122-2.5-2.5-2.5h-2.5V11.5H7V3h-2.5c-1.378,0-2.5,1.122-2.5,2.5v6H0v1H2v6c0,1.379,1.122,2.5,2.5,2.5h2.5V12.5h10v8.5h2.5c1.378,0,2.5-1.121,2.5-2.5v-6h2v-1ZM6,20h-1.5c-.827,0-1.5-.673-1.5-1.5V5.5c0-.827,.673-1.5,1.5-1.5h1.5V20Zm15-1.5c0,.827-.673,1.5-1.5,1.5h-1.5V4h1.5c.827,0,1.5,.673,1.5,1.5v13Z"/>
</svg>

);
