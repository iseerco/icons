import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrUserVolunteer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,11c3.032,0,5.5-2.467,5.5-5.5S15.032,0,12,0,6.5,2.467,6.5,5.5s2.468,5.5,5.5,5.5Zm0-8c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5,1.121-2.5,2.5-2.5Zm3.251,16.801c0,1.281-1.511,3.092-2.48,3.909-.459,.387-1.129,.387-1.588,0-.969-.817-2.48-2.628-2.48-3.909,0-.995,.733-1.801,1.637-1.801s1.637,.806,1.637,1.801c0-.995,.733-1.801,1.637-1.801s1.637,.806,1.637,1.801Zm5.749,2.199v.5c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-.5c0-3.309-2.691-6-6-6s-6,2.691-6,6v.5c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-.5c0-4.962,4.037-9,9-9s9,4.038,9,9Z"/>
</svg>

);
