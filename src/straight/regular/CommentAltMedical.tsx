import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,9h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Zm11-6v17h-6.852l-3.847,3.18c-.362.322-.826.484-1.293.484-.476,0-.955-.168-1.337-.507l-3.748-3.157H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v15h5.654l4.326,3.645,4.449-3.645h5.571V3Z"/></svg>

);
