import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrShredder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,6h-.5v-1.5c0-2.48-2.02-4.5-4.5-4.5h-5c-2.48,0-4.5,2.02-4.5,4.5v1.5h-.5C2.02,6,0,8.02,0,10.5v1c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5v-1c0-2.48-2.02-4.5-4.5-4.5Zm-11.5-1.5c0-.83,.67-1.5,1.5-1.5h5c.83,0,1.5,.67,1.5,1.5v1.5H8v-1.5Zm13,7c0,.83-.67,1.5-1.5,1.5H4.5c-.83,0-1.5-.67-1.5-1.5v-1c0-.83,.67-1.5,1.5-1.5h15c.83,0,1.5,.67,1.5,1.5v1ZM6,19.5v3c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-3c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm5,0v3c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-3c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm5,0v3c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-3c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm5,0v3c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-3c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Z"/></svg>

);
