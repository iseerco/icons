import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserVolunteer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,11c3.032,0,5.5-2.467,5.5-5.5S15.032,0,12,0,6.5,2.467,6.5,5.5s2.468,5.5,5.5,5.5Zm0-8c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5,1.121-2.5,2.5-2.5Zm3.251,16.801c0,1.886-3.274,4.202-3.274,4.202,0,0-3.274-2.316-3.274-4.202,0-.995,.733-1.801,1.637-1.801s1.637,.806,1.637,1.801c0-.995,.733-1.801,1.637-1.801s1.637,.806,1.637,1.801Zm5.749-1.801v6h-3v-6c0-1.103-.897-2-2-2H8c-1.103,0-2,.897-2,2v6H3v-6c0-2.757,2.243-5,5-5h8c2.757,0,5,2.243,5,5Z"/>
</svg>

);
