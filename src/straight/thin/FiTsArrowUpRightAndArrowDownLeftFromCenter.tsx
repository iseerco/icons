import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowUpRightAndArrowDownLeftFromCenter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.854,14.854L1.707,23h6.293v1H1.5c-.827,0-1.5-.673-1.5-1.5v-6.5H1v6.293L9.146,14.146l.707,.707ZM22.5,0h-6.5V1h6.293L14.146,9.146l.707,.707L23,1.707v6.293h1V1.5c0-.827-.673-1.5-1.5-1.5Z"/></svg>

);
