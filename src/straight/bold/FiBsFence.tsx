import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFence = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11v-3h-1v-2.996L18,.004l-5,5v2.996h-2v-2.996L6,.004,1,5.004v2.996H0v3H1v4H0v3H1v6H11v-6h2v6h10v-6h1v-3h-1v-4h1Zm-8-4.754l2-2,2,2v1.754h-4v-1.754Zm-12,0l2-2,2,2v1.754H4v-1.754Zm0,4.754h4v4H4v-4Zm4,10H4v-3h4v3Zm3-6v-4h2v4h-2Zm9,6h-4v-3h4v3Zm0-6h-4v-4h4v4Z"/></svg>

);
