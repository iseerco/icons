import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const N = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.37,24.006c-1.411,0-2.662-.813-3.246-2.178L7.038,2.96c-.375-.876-1.163-1.051-1.773-.927-.611,.125-1.265,.599-1.265,1.551V23c0,.553-.447,1-1,1s-1-.447-1-1V3.583C2,1.835,3.15,.425,4.862,.074c1.708-.353,3.325,.491,4.014,2.098l8.086,18.869c.375,.874,1.159,1.049,1.773,.927,.611-.126,1.265-.6,1.265-1.551V1c0-.552,.447-1,1-1s1,.448,1,1V20.417c0,1.748-1.15,3.158-2.862,3.51-.259,.053-.516,.079-.768,.079Z"/></svg>

);
