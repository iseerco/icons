import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDumbbellWeightlifting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,2.092v-.592c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v.5H4v-.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v.592c-.581.207-1,.756-1,1.408s.419,1.201,1,1.408v.592c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-.5h1.923l2.077,6.097v11.403c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-4.5h2v4.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-11.403l2.077-6.097h1.923v.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-.592c.581-.207,1-.756,1-1.408s-.419-1.201-1-1.408Zm-11,7.908c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5Z"/>
</svg>

);
