import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMobile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4.011,0v21.5c0,1.378,1.121,2.5,2.5,2.5h10.989c1.379,0,2.5-1.122,2.5-2.5V0H4.011Zm14.989,21.5c0,.827-.673,1.5-1.5,1.5H6.511c-.827,0-1.5-.673-1.5-1.5V1h13.989v20.5Zm-2.989-5.5h-8v-1h8v1Zm-6.011,4h4v1h-4v-1Zm.45-9h3.178l.496,2h1.03l-1.711-6.901c-.105-.448-.41-.817-.814-.985-.387-.164-.822-.149-1.191.041-.369.188-.633.526-.722.911l-1.827,6.935h1.034l.527-2Zm1.237-4.695c.025-.112.101-.207.206-.261.106-.055.234-.058.351-.009.109.046.194.154.228.297l.909,3.667h-2.667l.973-3.695Z"/>
</svg>

);
