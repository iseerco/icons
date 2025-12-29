import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sledding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,21.729a3.968,3.968,0,0,1-2.278,2.044,3.972,3.972,0,0,1-3.058-.167L.036,14.769l.857-1.807L19.525,21.8a2,2,0,0,0,2.672-.936ZM18.5,5A2.5,2.5,0,1,0,16,2.5,2.5,2.5,0,0,0,18.5,5ZM8.584,11.159A3.272,3.272,0,0,0,8.363,14.5,2.877,2.877,0,0,0,10.947,16H16.2l.483,2.23,2.28,1.082L17.809,14H10.946a.866.866,0,0,1-.823-.448,1.3,1.3,0,0,1,.151-1.324L13.72,6.584l1.076.687a1.182,1.182,0,0,1-.11,1.458l.007.006c-.012.015-.03.023-.042.039L12.628,12H15.08l1.2-2.068c0-.006,0-.012.008-.017a3.1,3.1,0,0,0-.169-4.149L13.391,4H4V6h7.731Z"/></svg>

);
