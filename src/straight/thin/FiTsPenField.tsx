import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPenField = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,15c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm3,1c0,.552.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm5,1c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm2.535-5h-3.535v-3.536L19.732.732c.975-.976,2.561-.975,3.535,0,.473.472.732,1.1.732,1.768s-.26,1.296-.732,1.768l-7.732,7.732Zm-.414-1l7.439-7.439c.283-.283.439-.66.439-1.061s-.156-.777-.439-1.061c-.584-.585-1.537-.585-2.121,0l-7.439,7.439v2.122h2.121Zm7.118-2.876l-.876.876h.136c.827,0,1.5.673,1.5,1.5v11.5H1v-11.5c0-.827.673-1.5,1.5-1.5h7.5v-1H2.5c-1.379,0-2.5,1.122-2.5,2.5v12.5h24v-12.5c0-1.119-.744-2.058-1.761-2.376Z"/>
</svg>

);
