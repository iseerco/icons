import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonArrowUpFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2.5,2.5C2.5,1.119,3.619,0,5,0s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm15.5,3.576v12.924h2V6.076l2.543,2.543,1.414-1.414-3.543-3.543c-.779-.779-2.049-.779-2.828,0l-3.543,3.543,1.414,1.414,2.543-2.543Zm6,15.924v2H0v-2H2v-5H0V9c0-1.654,1.346-3,3-3H7c1.654,0,3,1.346,3,3v8h-2v5H24Zm-20,0h2v-5h-2v5Z"/>
</svg>

);
