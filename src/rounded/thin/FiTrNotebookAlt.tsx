import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrNotebookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H7.5c-1.96,0-3.62,1.25-4.24,3H1.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h1.53c-.02,.16-.03,.33-.03,.5v3H1.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h1.5v3H1.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h1.5v3H1.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h1.5v3c0,.17,0,.34,.03,.5H1.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h1.76c.62,1.75,2.29,3,4.24,3h11c2.48,0,4.5-2.02,4.5-4.5V4.5c0-2.48-2.02-4.5-4.5-4.5ZM4,19.5V4.5c0-1.93,1.57-3.5,3.5-3.5h.5V23h-.5c-1.93,0-3.5-1.57-3.5-3.5Zm18,0c0,1.93-1.57,3.5-3.5,3.5H9V1h9.5c1.93,0,3.5,1.57,3.5,3.5v15Z"/></svg>

);
