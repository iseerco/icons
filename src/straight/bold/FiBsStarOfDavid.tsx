import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStarOfDavid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.077,12l3.556-6h-7.111L11.999.056l-3.517,5.944H1.381l3.55,6-3.55,6h7.101l3.517,5.944,3.522-5.944h7.111l-3.556-6Zm-2.292,0l-2.37,4h-4.826l-2.367-4,2.367-4h4.826l2.37,4Z"/></svg>

);
