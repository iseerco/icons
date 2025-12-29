import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRankingPodiumEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,11h-2c-.771,0-1.468.301-2,.78v-5.78c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v3.78c-.532-.48-1.229-.78-2-.78h-2c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3v-4c0-1.654-1.346-3-3-3ZM1,18v-6c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2v8H3c-1.103,0-2-.897-2-2Zm7-12c0-1.103.897-2,2-2h4c1.103,0,2,.897,2,2v14h-8V6Zm15,12c0,1.103-.897,2-2,2h-4v-6c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2v4Z"/>
</svg>

);
