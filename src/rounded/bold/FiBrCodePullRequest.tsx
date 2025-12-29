import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCodePullRequest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,7.663v9.674c1.182,.562,2,1.767,2,3.163,0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5c0-1.396,.818-2.601,2-3.163V7.663c-1.182-.562-2-1.767-2-3.163C0,2.567,1.567,1,3.5,1s3.5,1.567,3.5,3.5c0,1.396-.818,2.601-2,3.163Zm17,9.674V8.5c0-3.033-2.468-5.5-5.5-5.5h-1.5V.808c0-.716-.863-1.077-1.373-.574l-3.132,3.091c-.249,.246-.494,.675-.494,1.175s.245,.929,.494,1.175l3.132,3.091c.51,.503,1.373,.142,1.373-.574v-2.192h1.5c1.379,0,2.5,1.122,2.5,2.5v8.837c-1.182,.562-2,1.767-2,3.163,0,1.933,1.529,3.5,3.462,3.5s3.538-1.567,3.538-3.5c0-1.396-.818-2.601-2-3.163Z"/></svg>

);
