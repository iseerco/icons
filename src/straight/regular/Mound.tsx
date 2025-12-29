import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.323,10.135c-1.087-1.966-3.077-3.14-5.323-3.14s-4.236,1.174-5.322,3.14L0,22.218v1.782h24v-1.782l-6.677-12.083ZM2.406,22l6.022-10.897c.729-1.32,2.064-2.107,3.572-2.107s2.843.788,3.572,2.107l6.022,10.897H2.406Z"/>
</svg>

);
