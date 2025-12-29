import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Kazoo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <g>
    <path d="m3.732,14.611l-3.732,3.732,5.657,5.657,3.731-3.731c-2.753-.737-4.92-2.904-5.657-5.657Z"/>
    <path d="m23.5,1.662l-1.162-1.162c-.539-.539-1.384-.623-2.019-.2l-6.148,4.735c2.224.808,3.987,2.57,4.795,4.794l4.734-6.148c.423-.635.339-1.48-.2-2.019Z"/>
  </g>
  <path d="m11.452,18.548c3.309,0,6-2.691,6-6s-2.691-6-6-6-6,2.691-6,6,2.691,6,6,6Zm-1-3v-2h-2s0-2,0-2h2v-2s2,0,2,0v2h2s0,2,0,2h-2v2s-2,0-2,0Z"/>
</svg>

);
