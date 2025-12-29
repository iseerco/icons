import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDeleteDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.707,0H4.5c-1.379,0-2.5,1.122-2.5,2.5v21.5h20V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707ZM3,23V2.5c0-.827.673-1.5,1.5-1.5h9.5v7h7v15H3Zm12.854-11.146l-3.146,3.146,3.146,3.146-.707.707-3.146-3.146-3.146,3.146-.707-.707,3.146-3.146-3.146-3.146.707-.707,3.146,3.146,3.146-3.146.707.707Z"/>
</svg>

);
