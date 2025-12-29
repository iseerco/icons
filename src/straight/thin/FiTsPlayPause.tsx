import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPlayPause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,21.518V2.48l11.979,7.648c.64,.402,1.021,1.097,1.021,1.857,0,.76-.387,1.457-1.035,1.863L2,21.518ZM3,4.305v15.384l10.43-6.685c.358-.226,.57-.605,.57-1.02,0-.415-.207-.792-.556-1.012L3,4.305ZM22,21h-1V3h1V21Zm-4,0h-1V3h1V21Z"/></svg>

);
