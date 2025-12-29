import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBookmarkSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.988,14.524l.662.662L3,24V6.536l1,1v14.018l6.988-7.03Zm13.016,8.773l-.707.707L-.003.704.704-.003l2.305,2.305c.102-1.286,1.18-2.302,2.491-2.302h13c1.379,0,2.5,1.122,2.5,2.5v17.793l3.004,3.004ZM4,3.293l16,16V2.5c0-.827-.673-1.5-1.5-1.5H5.5c-.827,0-1.5.673-1.5,1.5v.793Z"/></svg>

);
