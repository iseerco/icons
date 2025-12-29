import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaveSine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5,21c-4.085,0-5.633-5.684-6.465-8.737-1.027-3.772-2.288-7.263-4.535-7.263-1.736,0-4.031,3.888-4.504,9.09-.051.55-.526.953-1.087.906-.55-.05-.955-.537-.905-1.086C.491,8.547,3.055,3,6.5,3c4.085,0,5.633,5.684,6.465,8.737,1.027,3.772,2.288,7.263,4.535,7.263,1.736,0,4.031-3.888,4.504-9.09.051-.55.524-.95,1.087-.906.55.05.955.537.905,1.086-.487,5.363-3.051,10.91-6.496,10.91Z"/></svg>

);
