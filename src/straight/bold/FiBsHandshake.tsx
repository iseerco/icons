import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandshake = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.169,4.262l3.477,1.738h3.354V3h-2.646l-2.843-1.421c-2.005-1.004-4.605-.599-6.146,.857l-.358,.302-.341-.311c-1.011-.921-2.321-1.428-3.727-1.428-.848,0-1.695,.2-2.45,.578l-2.844,1.422H0v3H3.354l3.478-1.739c.843-.422,2.046-.313,2.813,.385l.051,.046-3.788,3.208c-1.044,1.046-1.202,2.706-.369,3.864,.511,.71,1.301,1.157,2.167,1.227,.837,.069,1.669-.227,2.279-.809l2.067-1.767,6.539,4.994-6.591,4.845L3.492,14H0v3H2.508l9.492,6.977,9.492-6.977h2.508v-3h-2.31L12.044,6.634l2.317-1.96c.741-.697,1.902-.867,2.808-.412Z"/></svg>

);
