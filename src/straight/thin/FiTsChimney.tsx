import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChimney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,0H2.5C1.122,0,0,1.122,0,2.5v6.5h3v15h18v-15h3V2.5c0-1.378-1.122-2.5-2.5-2.5Zm-12.5,23h-5v-4h5v4Zm5-9v4H4v-4h10Zm-10-1v-4h5v4h-5Zm16,10h-10v-4h10v4Zm0-5h-5v-4h5v4Zm0-5h-10v-4h10v4Zm3-5H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v5.5Z"/>
</svg>

);
