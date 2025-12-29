import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.79,10.425c-1.182-2.139-3.346-3.415-5.79-3.415s-4.607,1.276-5.79,3.415L0,21.664v2.387h24v-2.387l-6.21-11.239ZM3.767,21.051l5.07-9.174c.646-1.168,1.828-1.866,3.164-1.866s2.518.698,3.164,1.866l5.07,9.174H3.767Z"/>
</svg>

);
