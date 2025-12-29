import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFtp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21h-9.55c-.199-.978-.972-1.75-1.95-1.95v-4.05h8.5V4.5c0-1.378-1.122-2.5-2.5-2.5h-6.345l-2.909-2h-3.746c-1.378,0-2.5,1.122-2.5,2.5v12.5h8.5v4.05c-.978.199-1.75.972-1.95,1.95H0v1h9.55c.232,1.14,1.242,2,2.45,2s2.217-.86,2.45-2h9.55v-1ZM5.5,1h3.436l2.909,2h6.655c.827,0,1.5.673,1.5,1.5v1.5H4v-3.5c0-.827.673-1.5,1.5-1.5Zm-1.5,6h16v7H4v-7Zm8,16c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
</svg>

);
