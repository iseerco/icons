import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AnswerAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v17h6.923l3.748,3.156c.382.34.862.509,1.338.509.467,0,.931-.163,1.292-.485l3.846-3.18h6.853V3c0-1.654-1.346-3-3-3Zm-11.553,16l-.706-3h-3.481l-.706,3h-2.053l2.439-10.362c.287-1.237,1.625-2.008,2.937-1.458.627.263,1.049.866,1.202,1.528l2.422,10.291h-2.053Zm9.553-1h-6v-2h6v2Zm2-4h-8v-2h8v2Zm0-4h-8v-2h8v2Zm-13.887-.91l1.156,4.91h-2.539l1.156-4.91c.012-.053.059-.09.113-.09s.101.037.113.09Z"/>
</svg>

);
