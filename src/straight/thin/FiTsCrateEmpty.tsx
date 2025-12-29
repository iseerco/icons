import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCrateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,11v10.5c0,1.378,1.121,2.5,2.5,2.5h19c1.379,0,2.5-1.122,2.5-2.5v-10.5H0Zm23,10.5c0,.827-.673,1.5-1.5,1.5H2.5c-.827,0-1.5-.673-1.5-1.5v-1.5h19.5v-1H1v-3h19.5v-1H1v-3h22v9.5Z"/>
</svg>

);
