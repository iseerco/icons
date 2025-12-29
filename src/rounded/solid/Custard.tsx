import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Custard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3.967,5c.475-2.319,2.508-4,4.888-4h6.288c2.38,0,4.414,1.681,4.889,4h-3.532c-.979,0-1.864.403-2.5,1.053-.636-.649-1.521-1.053-2.5-1.053s-1.864.403-2.5,1.053c-.636-.649-1.521-1.053-2.5-1.053h-2.533Zm20.033,14c0,.553-.447,1-1,1h-.278c-.626,1.758-2.307,3-4.222,3H5.5c-1.914,0-3.595-1.242-4.222-3h-.278c-.552,0-1-.447-1-1s.448-1,1-1h22c.553,0,1,.447,1,1Zm-2.015-3l-1.588-9h-3.898c-.827,0-1.5.673-1.5,1.5v2.5c0,.553-.447,1-1,1s-1-.447-1-1v-2.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v4.5c0,.553-.448,1-1,1s-1-.447-1-1v-4.5c0-.827-.673-1.5-1.5-1.5h-2.898l-1.588,9h19.972Z"/>
</svg>

);
