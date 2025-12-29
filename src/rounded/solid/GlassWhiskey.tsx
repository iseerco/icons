import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassWhiskey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.02,4.28c-.078-.838.203-1.676.77-2.299.567-.623,1.376-.979,2.218-.979h18.001c.846-.001,1.656.358,2.224.985.568.627.846,1.47.762,2.312l-.97,9.702H.927S.02,4.28.02,4.28Zm1.094,11.721l.23,2.465c.241,2.586,2.381,4.536,4.979,4.536h11.275c2.58-.001,4.72-1.937,4.976-4.504l.25-2.497H1.114Z"/></svg>

);
