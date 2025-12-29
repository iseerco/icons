import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StageConcert = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.277,4.556L13.372.302c-.847-.404-1.819-.404-2.668,0L1.799,4.556C.73,5.066.039,6.163.039,7.349v16.651h2v-4h20v4h2V7.349c0-1.187-.691-2.282-1.761-2.793Zm-10.711-2.449c.3-.143.645-.143.944,0l6.057,2.894H5.509l6.057-2.894Zm1.434,15.894v-4.52l2.125-1.699-1.249-1.562-2.875,2.301v5.48H2.039V7.349c0-.121.025-.237.063-.349h2.898v2h2v-2h4v2h2v-2h4v2h2v-2h2.975c.038.112.063.228.063.349v10.651h-9.039Zm4.61,4l.805,2H5.584l.805-2h11.221Z"/>
</svg>

);
