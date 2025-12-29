import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCodeBranch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5c0-1.933-1.567-3.5-3.5-3.5s-3.5,1.567-3.5,3.5c0,1.396,.818,2.601,2,3.163v2.837c0,.276-.224,.5-.5,.5H6.5c-.526,0-1.031,.091-1.5,.257v-3.594c1.182-.562,2-1.767,2-3.163,0-1.933-1.567-3.5-3.5-3.5S0,1.567,0,3.5c0,1.396,.818,2.601,2,3.163v10.674c-1.182,.562-2,1.767-2,3.163,0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5c0-1.396-.818-2.601-2-3.163v-2.837c0-.827,.673-1.5,1.5-1.5h12c1.93,0,3.5-1.57,3.5-3.5v-2.837c1.182-.562,2-1.767,2-3.163Z"/></svg>

);
