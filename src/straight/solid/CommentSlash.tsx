import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.758,23h-6.758c-6.065,0-11-4.935-11-11,0-1.909,.49-3.739,1.398-5.36L18.758,23Zm5.199-.457l-1.414,1.414L.043,1.457,1.457,.043l3.506,3.506c1.973-1.648,4.435-2.549,7.037-2.549,6.065,0,11,4.935,11,11v9.586l.957,.957Z"/></svg>

);
