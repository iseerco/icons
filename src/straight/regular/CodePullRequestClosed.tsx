import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodePullRequestClosed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,4C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.86,1.276,3.428,3,3.873v8.253c-1.724,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.276-3.428-3-3.873V7.873c1.724-.445,3-2.013,3-3.873Zm-6,0c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2ZM6,20c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm15-3.873v-7.127h-2v7.127c-1.724,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.276-3.428-3-3.873Zm-1,5.873c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm-3.964-15.451l2.55-2.549-2.55-2.549L17.45,.037l2.55,2.549L22.55,.037l1.414,1.414-2.55,2.549,2.55,2.549-1.414,1.414-2.55-2.549-2.55,2.549-1.414-1.414Z"/></svg>

);
