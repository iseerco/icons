import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVideoSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19.207V4.793l-4,4v-2.293c0-1.378-1.121-2.5-2.5-2.5H4.707L.753,.046,.046,.753,23.246,23.954l.707-.707-3.953-3.953v-4.086l4,4Zm-1-12v9.586l-3-3v-3.586l3-3ZM5.707,5h11.793c.827,0,1.5,.673,1.5,1.5v11.793L5.707,5Zm9.793,14l1,1H0V6.5c0-.807,.391-1.519,.987-1.977l.713,.713c-.419,.266-.7,.732-.7,1.264v12.5H15.5Z"/></svg>

);
