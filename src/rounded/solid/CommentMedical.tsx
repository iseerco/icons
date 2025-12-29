import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.854.03c-3.478-.243-6.883,1.029-9.339,3.485C1.059,5.971-.211,9.375.03,12.854c.44,6.354,6.065,11.146,13.083,11.146h5.888c2.943,0,4.999-2.404,4.999-5.847v-5.815C24,5.869,19.104.463,12.854.03Zm3.146,12.97h-3v3c0,.552-.448,1-1,1s-1-.448-1-1v-3h-3c-.552,0-1-.448-1-1s.448-1,1-1h3v-3c0-.552.448-1,1-1s1,.448,1,1v3h3c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>

);
