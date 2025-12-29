import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodePullRequestDraft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,4C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.858,1.28,3.411,3,3.858v8.284c-1.72,.447-3,1.999-3,3.858,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.859-1.28-3.411-3-3.858V7.858c1.72-.447,3-2,3-3.858Zm12,12c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm-2-12c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm0,7c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Z"/></svg>

);
