import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFonduePot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,7h-3.678l2.659-4.463-2.578-1.535-3.574,5.999h-1.957l1.435-6.281L13.384.051l-1.588,6.949h-4.626L3.596,1.001l-2.577,1.535,2.659,4.463H0v3h2v2.5c0,2.622,1.194,4.97,3.066,6.531l-2.259,4.969h3.296l1.363-3h9.068l1.364,3h3.295l-2.259-4.969c1.872-1.56,3.066-3.909,3.066-6.531v-2.5h2v-3Zm-5,5.5c0,3.032-2.468,5.5-5.5,5.5h-3c-3.033,0-5.5-2.468-5.5-5.5v-2.5h14v2.5Z"/>
</svg>

);
