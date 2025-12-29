import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceConfounded = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,9c0-2.267,3.369-3,5-3,0,0-2,2-2,3s2,3,2,3c-1.631,0-5-.733-5-3Zm-2,0c0-2.267-3.369-3-5-3,0,0,2,2,2,3s-2,3-2,3c1.631,0,5-.733,5-3Zm13,3c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.963-4.037-9-9-9S3,7.037,3,12s4.037,9,9,9,9-4.037,9-9Zm-4.561,.939l-1.439,1.439-1.483-1.483-1.51,1.49-1.507-1.507-1.5,1.5-1.439-1.439-2.121,2.121,3.561,3.561,1.5-1.5,1.493,1.493,1.51-1.49,1.497,1.497,3.561-3.561-2.121-2.121Z"/></svg>

);
