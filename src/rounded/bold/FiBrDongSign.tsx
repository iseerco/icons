import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDongSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,22.5c0,.83-.67,1.5-1.5,1.5H3.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H20.5c.83,0,1.5,.67,1.5,1.5ZM6,13c0-3.31,2.69-6,6-6,1.09,0,2.12,.29,3,.81v-2.81h-3.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h3.5v-.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v.5h.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-.5v12.5c0,.83-.67,1.5-1.5,1.5-.61,0-1.13-.36-1.37-.88-.91,.56-1.99,.88-3.13,.88-3.31,0-6-2.69-6-6Zm3,0c0,1.65,1.35,3,3,3s3-1.35,3-3-1.35-3-3-3-3,1.35-3,3Z"/></svg>

);
