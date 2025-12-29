import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Moustache = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17.5,17c-3.198,0-4.691-1.981-5.5-3-.809,1.019-2.302,3-5.5,3-2.203,0-4.737-1.652-6.103-3.285-.397-.476-.501-1.106-.275-1.686,.229-.591,.765-1.011,1.396-1.096,1.673-.224,2.705-1.01,4.269-2.201,1.274-.978,2.263-1.759,3.933-1.733,.918,0,1.735,.397,2.28,.749,.545-.352,1.362-.749,2.28-.749,1.533,0,2.366,.547,3.557,1.447h0s.441,.336,.441,.336c1.531,1.169,2.544,1.942,4.201,2.156,.609,.078,1.13,.486,1.358,1.065,.229,.58,.125,1.234-.269,1.709-1.314,1.583-3.774,3.287-6.069,3.287Z"/>
</svg>

);
