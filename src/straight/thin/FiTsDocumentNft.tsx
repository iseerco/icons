import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDocumentNft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,0H2.5C1.122,0,0,1.122,0,2.5V24H18.207l5.793-5.793V2.5c0-1.378-1.121-2.5-2.5-2.5ZM1,2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v14.5h-6v6H1V2.5ZM18,22.793v-4.793h4.793l-4.793,4.793Zm-2-11.793V5h-1.5v-1h4v1h-1.5v6h-1Zm-6-7h3.5v1h-2.5v2h2.5v1h-2.5v3h-1V4Zm-2.5,0h1v7h-.913l-2.587-4.776v4.776h-1V4h.933l2.567,4.74V4Z"/>
</svg>

);
