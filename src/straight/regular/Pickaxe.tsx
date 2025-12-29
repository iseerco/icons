import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pickaxe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.985,18.985c-.684-3.648-2.627-7.284-5.285-10.271L1.489,23.925l-1.414-1.414L15.287,7.299c-2.99-2.665-6.633-4.614-10.287-5.299V0C10.698,0,15.157,1.49,18.331,4.255l1.712-1.712,1.414,1.414-1.713,1.713c2.756,3.173,4.24,7.626,4.24,13.315h-1.999Z"/>
</svg>

);
