import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWatch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5,11.379l2.561,2.561-2.121,2.121-3.439-3.439v-5.621h3v4.379Zm4.5,8.616v4.005h-3v-2.46c-.947.299-1.955.46-3,.46s-2.053-.161-3-.46v2.46h-3v-4.005c-2.427-1.826-4-4.73-4-7.995s1.573-6.169,4-7.995V0h3v2.46c.947-.299,1.955-.46,3-.46s2.053.161,3,.46V0h3v4.005c2.427,1.826,4,4.73,4,7.995s-1.573,6.169-4,7.995Zm1-7.995c0-3.86-3.14-7-7-7s-7,3.14-7,7,3.14,7,7,7,7-3.141,7-7Z"/></svg>

);
