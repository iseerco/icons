import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignPosts = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2.424v-1.424c0-.553-.448-1-1-1s-1,.447-1,1v1H5v-1c0-.553-.448-1-1-1s-1,.447-1,1v1.424C1.237,3.198,0,4.955,0,7v6c0,2.045,1.237,3.802,3,4.576v5.424c0,.553.448,1,1,1s1-.447,1-1v-5h14v5c0,.553.448,1,1,1s1-.447,1-1v-5.424c1.763-.774,3-2.531,3-4.576v-6c0-2.045-1.237-3.802-3-4.576Z"/>
</svg>

);
