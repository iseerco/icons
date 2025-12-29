import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSkill = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm11.5.5c-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2-.895-2-2-2Zm0,7c-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2-.895-2-2-2Zm0,7c-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2-.895-2-2-2Zm-4-7.5v8.5h-2v6H2v-6H0v-8.5c0-1.93,1.57-3.5,3.5-3.5h3c1.93,0,3.5,1.57,3.5,3.5Zm-7,5.5h4v-5.5c0-.276-.224-.5-.5-.5h-3c-.276,0-.5.224-.5.5v5.5ZM18,3.5v3h6v-3h-6Zm0,10h6v-3h-6v3Zm0,7h6v-3h-6v3Z"/>
</svg>

);
