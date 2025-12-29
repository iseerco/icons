import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLeadership = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm8,11.725l5-3.469v3.651l-13.825,9.593h-5.262l1.087-.754v-3.246h-2.032l-.018,1.382-.848,2.618H0l1-3.194v-6.306c0-1.266.945-2.302,2.166-2.466l4.468-1.364,4.126-3.971.006.006c.45-.435,1.06-.705,1.735-.705h4.5V0l6,2.5-3,2v4.5h-5v2h3v3.225Zm-8-2.631l-1.804,1.736-3.196.975v2.695h3v4.164l2-1.388v-8.182Zm5,2.406h-2v3.695l2-1.388v-2.307Zm-12.5-3c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Z"/>
</svg>

);
