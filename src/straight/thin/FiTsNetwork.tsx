import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNetwork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21h-9.55c-.199-.978-.972-1.75-1.95-1.95v-5.05h7c1.378,0,2.5-1.122,2.5-2.5v-2.5h-1V2.5c0-1.378-1.122-2.5-2.5-2.5H5.5c-1.378,0-2.5,1.122-2.5,2.5v6.5h-1v2.5c0,1.378,1.122,2.5,2.5,2.5h7v5.05c-.978.199-1.75.972-1.95,1.95H0v1h9.55c.232,1.14,1.242,2,2.45,2s2.217-.86,2.45-2h9.55v-1ZM4,2.5c0-.827.673-1.5,1.5-1.5h13c.827,0,1.5.673,1.5,1.5v6.5h-5.207l-1,1h-3.586l-1-1h-5.207V2.5Zm-1,9v-1.5h5.793l1,1h4.414l1-1h5.793v1.5c0,.827-.673,1.5-1.5,1.5H4.5c-.827,0-1.5-.673-1.5-1.5Zm9,11.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
</svg>

);
