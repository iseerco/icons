import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartBullet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2h-2.5v-.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v.5H3.5C1.57,2,0,3.57,0,5.5v1c0,1.93,1.57,3.5,3.5,3.5H15v.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-.5h2.5c1.93,0,3.5-1.57,3.5-3.5v-1c0-1.93-1.57-3.5-3.5-3.5ZM3,6.5v-1c0-.28,.22-.5,.5-.5h6.5v2H3.5c-.28,0-.5-.22-.5-.5Zm18,0c0,.28-.22,.5-.5,.5h-2.5v-2h2.5c.28,0,.5,.22,.5,.5v1Zm-.5,7.5h-7.5v-.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v.5H3.5c-1.93,0-3.5,1.57-3.5,3.5v1c0,1.93,1.57,3.5,3.5,3.5h6.5v.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-.5h7.5c1.93,0,3.5-1.57,3.5-3.5v-1c0-1.93-1.57-3.5-3.5-3.5ZM3,18.5v-1c0-.28,.22-.5,.5-.5h1.5v2h-1.5c-.28,0-.5-.22-.5-.5Zm18,0c0,.28-.22,.5-.5,.5h-7.5v-2h7.5c.28,0,.5,.22,.5,.5v1Z"/></svg>

);
