import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonSeatReclined = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.646,19l1,2h-6.795c-3.279,0-6.158-2.327-6.845-5.533L.191,7h2.046l1.725,8.047c.491,2.291,2.546,3.953,4.889,3.953h5.795Zm5.972,3l-3.5-7h-8.171c-.475,0-.887-.338-.98-.804l-.439-2.196h7.473v-2h-7.873l-.6-3h-2.039l1.518,7.589c.279,1.397,1.517,2.411,2.941,2.411h6.935l3.5,7h3.618v-2h-2.382ZM5.5,5c1.379,0,2.5-1.121,2.5-2.5S6.878,0,5.5,0s-2.5,1.121-2.5,2.5,1.121,2.5,2.5,2.5Z"/></svg>

);
