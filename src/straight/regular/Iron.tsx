import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Iron = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,2H8v2h10c2.206,0,4,1.794,4,4v1H10.5C4.71,9,0,13.71,0,19.5v2.5H24V8c0-3.309-2.691-6-6-6Zm4,18H2v-.5c0-4.687,3.813-8.5,8.5-8.5h11.5v9Zm-11-4.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/>
</svg>

);
