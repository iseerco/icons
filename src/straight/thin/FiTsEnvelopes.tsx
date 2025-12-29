import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEnvelopes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H5.5c-1.38,0-2.5,1.12-2.5,2.5v15.5H24V4.5c0-1.38-1.12-2.5-2.5-2.5ZM5.5,3H21.5c.69,0,1.28,.47,1.45,1.12l-6.86,6.86c-1.32,1.32-3.63,1.32-4.95,0L4.11,3.94c.22-.55,.76-.94,1.39-.94Zm-1.5,16V5.25l6.44,6.43c.85,.85,1.98,1.32,3.18,1.32s2.33-.47,3.18-1.32l6.2-6.2v13.52H4Zm-3,3H19v1H0V7.5c0-.82,.39-1.54,1-2V22Z"/></svg>

);
