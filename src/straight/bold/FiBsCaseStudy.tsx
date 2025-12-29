import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCaseStudy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M10.683,14c-.433,.91-.683,1.925-.683,3,0,.34,.033,.673,.08,1H3c-1.657,0-3-1.343-3-3v-2H2V0H22V12.106c-.82-.837-1.847-1.468-3-1.812V3H5V13h3.308l.923,1h1.452Zm11.103,9.907l-2.491-2.491c-.691,.361-1.463,.584-2.295,.584-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5c0,.831-.223,1.604-.584,2.295l2.491,2.491-2.121,2.121Zm-2.786-6.907c0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2,2-.897,2-2Z"/>
</svg>

);
