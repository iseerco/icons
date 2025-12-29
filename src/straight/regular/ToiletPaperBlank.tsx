import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToiletPaperBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H7C4.196,0,2,3.294,2,7.5v12.5c0,1.103-.897,2-2,2v2H12c2.206,0,4-1.794,4-4v-3h3c2.804,0,5-3.733,5-8.5S21.804,0,19,0Zm-5,20c0,1.103-.897,2-2,2H3.463c.342-.589,.537-1.272,.537-2V7.5c0-3.241,1.581-5.5,3-5.5H15.745c-1.073,1.547-1.745,3.866-1.745,6.5v11.5Zm5-5c-1.419,0-3-2.67-3-6.5s1.581-6.5,3-6.5,3,2.67,3,6.5-1.581,6.5-3,6.5Zm1-6.5c0,.828-.448,1.5-1,1.5s-1-.672-1-1.5,.448-1.5,1-1.5,1,.672,1,1.5Z"/></svg>

);
