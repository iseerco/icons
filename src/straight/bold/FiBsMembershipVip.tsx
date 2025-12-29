import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMembershipVip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,11h-5v-3h5v3Zm0,2h-5v3h5v-3Zm5-7v15H0V6c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3Zm-3,0H3v12h18V6ZM5.2,15.394c.278.264.597.48.941.655l1.819-1.407,1.81,1.399c.347-.179.669-.396.947-.664l-.743-2.259,1.925-1.114c-.044-.35-.119-.69-.247-1.006h-2.448l-.689-2.446c-.203-.032-.355-.054-.567-.054-.205,0-.281.013-.478.042l-.759,2.458h-2.466c-.127.314-.202.651-.246.998l1.941,1.08-.741,2.316Z"/>
</svg>

);
