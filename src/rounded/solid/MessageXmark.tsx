import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,0H4C1.794,0,0,1.794,0,4v12c0,2.206,1.794,4,4,4h2.923l3.748,3.157c.382.339.862.507,1.337.507.467,0,.931-.162,1.293-.484l3.847-3.18h2.852c2.206,0,4-1.794,4-4V4c0-2.206-1.794-4-4-4Zm-3.819,12.793c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.793-2.793-2.793,2.793c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.793-2.793-2.793-2.793c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.793,2.793,2.793-2.793c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.793,2.793,2.793,2.793Z"/></svg>

);
