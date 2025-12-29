import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNotebook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,3V0h-1v3h-3V0h-1v3h-4V0h-1v3h-3V0h-1v3h-2v18.5c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V3h-2Zm1,18.5c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5V4h16v17.5Zm-3-11.5H7v-1h10v1Zm0,4H7v-1h10v1Zm-4,4h-6v-1h6v1Z"/>
</svg>

);
