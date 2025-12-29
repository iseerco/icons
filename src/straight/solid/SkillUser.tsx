import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SkillUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.999,0l-6,.002c-1.1,0-2,.901-1.999,2.001l.002,7.772c0,.858.949,1.377,1.672.915l2.454-1.689h5.872V2C24,.895,23.104,0,21.999,0Zm-2.531,6.666c-.459.474-1.22.471-1.675-.007l-2.037-2.152,1.387-1.441,1.496,1.581,2.543-2.631,1.398,1.43-3.113,3.221Zm-11.969,5.334c-3.032,0-5.5-2.467-5.5-5.5S4.468,1,7.5,1s5.5,2.467,5.5,5.5-2.468,5.5-5.5,5.5Zm7.5,12H0v-5.5c0-2.481,2.019-4.5,4.5-4.5h6c2.481,0,4.5,2.019,4.5,4.5v5.5Z"/>
</svg>

);
