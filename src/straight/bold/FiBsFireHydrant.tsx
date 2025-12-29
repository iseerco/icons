import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFireHydrant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,13.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm4.5,1.5v6h2v3H4v-3h2v-6h-2v-3h2v-4.5c0-2.791,1.915-5.143,4.5-5.81V0h3v1.69c2.585.668,4.5,3.019,4.5,5.81v4.5h2v3h-2ZM9.042,7h5.915c-.239-1.417-1.474-2.5-2.958-2.5s-2.719,1.083-2.958,2.5Zm5.958,14v-11h-6v11h6Z"/>
</svg>

);
