import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEthernet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,8v-3h-3v-3H6v3h-3v3H0v11.5c0,1.378,1.122,2.5,2.5,2.5h19c1.379,0,2.5-1.122,2.5-2.5v-11.5h-3Zm2,11.5c0,.827-.673,1.5-1.5,1.5h-1.5v-4h-1v4h-2v-4h-1v4h-2v-4h-1v4h-2v-4h-1v4h-2v-4h-1v4h-2v-4h-1v4h-1.5c-.827,0-1.5-.673-1.5-1.5v-10.5h3v-3h3v-3h10v3h3v3h3v10.5Z"/>
</svg>

);
