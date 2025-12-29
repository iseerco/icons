import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Snap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.207,6.207l-1.414-1.414,3-3,1.414,1.414-3,3Zm-7-1.414L3.207,1.793l-1.414,1.414,3,3,1.414-1.414ZM10,0h-2v5h2V0Zm7.926,24l3.651-3.5-4.803-8.429,5.581-5.581c.704-.704.876-1.839.294-2.647-.742-1.03-2.188-1.116-3.047-.257l-11.112,10.863-.067-3.241c0-.137-.03-.344-.084-.604-.291-1.025-1.304-1.747-2.455-1.579-1.103.161-1.875,1.193-1.876,2.307l-.008,8.668L0,24h17.926Z"/>
</svg>

);
