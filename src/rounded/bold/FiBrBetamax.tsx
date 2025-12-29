import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBetamax = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,13c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Zm6.5-3h-3c-.83,0-1.5,.67-1.5,1.5v3c0,.83,.67,1.5,1.5,1.5h3c.83,0,1.5-.67,1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5Zm6.5-1.5v7c0,3.03-2.47,5.5-5.5,5.5H5.5c-3.03,0-5.5-2.47-5.5-5.5v-7C0,5.47,2.47,3,5.5,3h13c3.03,0,5.5,2.47,5.5,5.5Zm-3,0c0-.17-.02-.34-.05-.5H3.05c-.03,.16-.05,.33-.05,.5v7c0,1.38,1.12,2.5,2.5,2.5h13c1.38,0,2.5-1.12,2.5-2.5v-7Z"/></svg>

);
