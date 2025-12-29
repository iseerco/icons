import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSwipeUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,9.711V3.58c0-.747-.536-1.44-1.273-1.56-.94-.153-1.739.568-1.739,1.479v15.195l-2.64-2.222c-.866-.722-2.153-.604-2.874.261-.722.866-.605,2.153.261,2.874l5.266,4.391,15-.009v-11.15l-12-3.13Zm9,11.284l-9,.012v-8.196l9,2.348v5.836ZM2.5,10v-6H0L3.372.26c.347-.347.91-.347,1.257,0l3.371,3.74h-2.5v6h-3Z"/>
</svg>

);
