import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPallet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,19.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.827-.673-1.5-1.5-1.5h-9v2.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2.5H2.5c-.827,0-1.5.673-1.5,1.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-1.379,1.122-2.5,2.5-2.5h19c1.378,0,2.5,1.121,2.5,2.5Z"/>
</svg>

);
