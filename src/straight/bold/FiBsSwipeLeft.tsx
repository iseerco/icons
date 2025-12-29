import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSwipeLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,3.58c0-.747-.536-1.44-1.273-1.56-.94-.153-1.739.568-1.739,1.479v15.195l-2.64-2.222c-.866-.722-2.153-.604-2.874.261-.722.866-.605,2.153.261,2.874l5.266,4.391,15-.009v-11.15l-12-3.13V3.58Zm9,11.579v5.836l-9,.012v-8.196l9,2.348Zm6-12.159v3h-6v2.5l-3.74-3.372c-.347-.347-.347-.91,0-1.257l3.74-3.371v2.5h6Z"/>
</svg>

);
