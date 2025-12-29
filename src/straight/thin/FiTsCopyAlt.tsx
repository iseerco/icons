import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCopyAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,5.293L13.707,0H4.5c-1.378,0-2.5,1.122-2.5,2.5v18.5h17V5.293Zm-5-3.586l3.293,3.293h-3.293V1.707ZM3,20V2.5c0-.827.673-1.5,1.5-1.5h8.5v5h5v14H3Zm19-12v16H5v-1h16v-15h1Z"/>
</svg>

);
