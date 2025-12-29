import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InviteAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5c0-1.657-1.343-3-3-3h-3V0h-2v2h-8V0h-2v2h-3c-1.657,0-3,1.343-3,3v3h24v-3Zm-14,13c0-4.418,3.582-8,8-8H0v14h12.709c-1.661-1.466-2.709-3.61-2.709-6Zm14,0c0,3.309-2.691,6-6,6s-6-2.691-6-6,2.691-6,6-6,6,2.691,6,6Zm-8-2c0,1.105.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm-1,4.5v.143c.734.832,1.806,1.357,3,1.357s2.266-.526,3-1.357v-.143c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5Z"/>
</svg>

);
