import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowTurnDownRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.97,16.97l-4.39,4.57c-.29,.31-.69,.46-1.08,.46s-.75-.14-1.04-.42c-.6-.58-.62-1.52-.04-2.12l3.33-3.46H5.5c-3.03,0-5.5-2.47-5.5-5.5V3.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v7c0,1.38,1.12,2.5,2.5,2.5h14.25l-3.33-3.46c-.57-.6-.56-1.55,.04-2.12,.6-.57,1.55-.56,2.12,.04l4.41,4.59c1.34,1.34,1.34,3.56-.02,4.93Z"/></svg>

);
