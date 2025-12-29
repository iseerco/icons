import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCrutch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.965,9.331L14.663.029l-2.121,2.121.917.917-5.446,5.445c-1.943,1.943-3.014,4.527-3.014,7.275v1.09L.157,21.722l2.121,2.121,4.843-4.843h1.091c2.709,0,5.36-1.099,7.274-3.014l5.446-5.446.911.911,2.121-2.121Zm-15.965,6.669v-.211c0-1.437.413-2.81,1.183-3.984l3.009,3.009c-1.177.764-2.567,1.187-3.98,1.187h-.212Zm6.426-3.195l-3.231-3.231,4.385-4.385,3.231,3.231-4.386,4.385Z"/></svg>

);
