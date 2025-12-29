import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PodiumStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10H4v-3c0-1.654,1.346-3,3-3h.184c.414,1.161,1.514,2,2.816,2h3c1.654,0,3-1.346,3-3s-1.346-3-3-3h-3c-1.302,0-2.402,.839-2.816,2h-.184c-2.757,0-5,2.243-5,5v3H0v2H2.153l2,12h15.693l2-12h2.153v-2ZM10,2h3c.552,0,1,.448,1,1s-.448,1-1,1h-3c-.552,0-1-.448-1-1s.448-1,1-1Zm8.153,20H5.847l-1.666-10h15.639l-1.666,10Zm-5.673-9.006l.652,2.006h2.11l.3,.918-1.707,1.241,.652,2.007-.781,.567-1.713-1.237-1.701,1.238-.781-.567,.652-2.007-1.707-1.241,.3-.918h2.11l.652-2.001,.96-.006Z"/></svg>

);
