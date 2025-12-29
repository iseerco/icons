import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v17h6.923l3.748,3.157c.382.339.862.507,1.337.507.467,0,.931-.162,1.293-.484l3.847-3.18h6.852V3c0-1.654-1.346-3-3-3Zm-5,11h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"/></svg>

);
