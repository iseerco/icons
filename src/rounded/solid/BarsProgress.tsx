import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BarsProgress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,11H20c5.276-.138,5.272-7.863,0-8H4c-5.276,.138-5.272,7.863,0,8ZM22,7c0,1.103-.897,2-2,2h-4V5h4c1.103,0,2,.897,2,2Zm-2,6H4c-5.276,.138-5.272,7.863,0,8H20c5.276-.138,5.272-7.863,0-8Zm0,6H10v-4h10c2.629,.048,2.627,3.953,0,4Z"/></svg>

);
