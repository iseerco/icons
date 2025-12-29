import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,0H4C1.794,0,0,1.794,0,4v12c0,2.206,1.794,4,4,4h2.923l3.748,3.157c.382.339.862.507,1.337.507.467,0,.931-.162,1.293-.484l3.847-3.18h2.852c2.206,0,4-1.794,4-4V4c0-2.206-1.794-4-4-4Zm-4,11h-3v3c0,.552-.448,1-1,1s-1-.448-1-1v-3h-3c-.552,0-1-.448-1-1s.448-1,1-1h3v-3c0-.552.448-1,1-1s1,.448,1,1v3h3c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>

);
