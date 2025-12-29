import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPreview = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,15h6v-6h-6v6Zm1-5h4v4h-4v-4Zm13-1h-6v6h6v-6Zm-1,5h-4v-4h4v4ZM1,15h6v-6H1v6Zm1-5h4v4H2v-4ZM2.5,0h4.5v1H2.5c-.827,0-1.5.673-1.5,1.5v4.5H0V2.5C0,1.122,1.122,0,2.5,0Zm0,23h4.5v1H2.5c-1.378,0-2.5-1.122-2.5-2.5v-4.5h1v4.5c0,.827.673,1.5,1.5,1.5Zm20.5-6h1v4.5c0,1.378-1.122,2.5-2.5,2.5h-4.5v-1h4.5c.827,0,1.5-.673,1.5-1.5v-4.5Zm1-14.5v4.5h-1V2.5c0-.827-.673-1.5-1.5-1.5h-4.5V0h4.5c1.378,0,2.5,1.122,2.5,2.5Z"/>
</svg>

);
