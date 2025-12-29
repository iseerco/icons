import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RankingPodiumEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21h-6.5v-8c0-1.105.895-2,2-2h2.5c1.105,0,2,.895,2,2v8ZM4.5,9h-2.5C.895,9,0,9.895,0,11v10h6.5v-10c0-1.105-.895-2-2-2ZM13.5,3h-3c-1.105,0-2,.895-2,2v16h7V5c0-1.105-.895-2-2-2Z"/>
</svg>

);
