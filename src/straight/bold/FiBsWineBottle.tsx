import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWineBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.936,9.127l-2.936-2.349V0h-8v6.779l-2.937,2.349c-1.312,1.05-2.063,2.615-2.063,4.295v10.577h18v-10.577c0-1.68-.752-3.245-2.064-4.295Zm-.936,11.873H6v-5h10v-3H6.035c.102-.599.418-1.142.902-1.53l4.063-3.249v-3.221h2v3.221l4.062,3.249c.597.478.938,1.189.938,1.953v7.577Z"/></svg>

);
