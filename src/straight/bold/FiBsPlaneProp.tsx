import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlaneProp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.973,11.664c-.16-.983-1.083-1.664-2.08-1.664l-6.961,.015-.976-5.015h2.043v2h3V0h-3V2h-2.627l-.081-.416C13.09,.667,12.278,.015,11.339,.015l-2.339-.015V2h-2v3h2v5H4l-1.394-2.104c-.37-.559-.997-.896-1.667-.896H0v10H.952c.674,0,1.302-.339,1.672-.903l1.376-2.097h5v5h-2v3h2v2h2.339c.938,0,1.751-.638,1.953-1.554l.087-.446h2.621v2h3v-7h-3v2h-2.039l.971-5,7.068-.015c1.215,0,2.176-1.068,1.973-2.321Z"/></svg>

);
