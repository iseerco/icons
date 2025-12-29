import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserCoach = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,12c3.309,0,6-2.691,6-6h1c.552,0,1-.448,1-1s-.448-1-1-1h-1.35c-.826-2.327-3.043-4-5.65-4-3.309,0-6,2.691-6,6s2.691,6,6,6Zm0-2c-2.206,0-4-1.794-4-4h8c0,2.206-1.794,4-4,4Zm0-8c1.474,0,2.75.81,3.444,2h-6.887c.694-1.19,1.97-2,3.444-2Zm9,21c0,.552-.448,1-1,1s-1-.448-1-1c0-2.248-1.069-4.246-2.721-5.527l-1.147,2.105c-.332.521-1.074.569-1.47.094l-1.701-2.041-1.701,2.041c-.395.474-1.138.427-1.47-.094l-1.125-2.064c-1.621,1.283-2.666,3.263-2.666,5.487,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9s9,4.038,9,9Z"/>
</svg>

);
