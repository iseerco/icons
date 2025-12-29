import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSkillUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.999,0l-6,.002c-1.1,0-2,.901-1.999,2.001l.002,7.772c0,.858.949,1.378,1.672.915l2.454-1.689h5.872V2C24,.895,23.104,0,21.999,0Zm-2.531,6.666c-.459.474-1.22.471-1.675-.007l-2.037-2.152,1.387-1.441,1.496,1.581,2.543-2.631,1.398,1.43-3.113,3.221Zm-11.969,5.334c3.032,0,5.5-2.467,5.5-5.5S10.532,1,7.5,1,2,3.467,2,6.5s2.468,5.5,5.5,5.5Zm0-8c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5,1.121-2.5,2.5-2.5Zm7.5,15v5h-3v-5c0-1.103-.897-2-2-2h-5c-1.103,0-2,.897-2,2v5H0v-5c0-2.757,2.243-5,5-5h5c2.757,0,5,2.243,5,5Z"/>
</svg>

);
