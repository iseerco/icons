import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMarsStrokeRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.564,10.943l-3.707-3.793-.715,.699,3.568,3.65h-5.71v-3.5h-1v3.5h-2.018c-.257-3.627-3.29-6.5-6.982-6.5C3.14,5,0,8.14,0,12s3.14,7,7,7c3.692,0,6.725-2.873,6.982-6.5h2.018v3.5h1v-3.5h5.71l-3.568,3.65,.715,.699,3.703-3.789c.585-.585,.585-1.536,.004-2.117ZM7,18c-3.309,0-6-2.691-6-6S3.691,6,7,6s6,2.691,6,6-2.691,6-6,6Z"/></svg>

);
