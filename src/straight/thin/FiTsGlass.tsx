import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.432,0l2.847,21.823c.162,1.241,1.228,2.177,2.479,2.177h10.488c1.251,0,2.317-.936,2.479-2.177L22.571,0H1.432ZM18.733,21.694c-.097,.744-.737,1.306-1.487,1.306H6.758c-.751,0-1.391-.562-1.488-1.306l-1.786-13.694h15.018l.13-1H3.354L2.571,1H21.432l-2.699,20.694Z"/></svg>

);
