import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TreeChristmas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.907,22,18.24,15h2.667l-4-6H19.1L13.716.7a2.414,2.414,0,0,0-3.355,0L4.946,9H7.17l-4,6H5.836L1.17,22h9.869v2h2V22ZM13,18a1,1,0,1,1,1-1A1,1,0,0,1,13,18Zm3,0a1,1,0,1,1-1,1A1,1,0,0,1,16,18Zm-1-7a1,1,0,1,1-1,1A1,1,0,0,1,15,11ZM13,5a1,1,0,1,1-1,1A1,1,0,0,1,13,5ZM8,20a1,1,0,1,1,1-1A1,1,0,0,1,8,20Zm1-5a1,1,0,1,1,1-1A1,1,0,0,1,9,15Zm1-5a1,1,0,1,1,1,1A1,1,0,0,1,10,10Z"/></svg>

);
