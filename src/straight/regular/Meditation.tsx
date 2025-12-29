import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Meditation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M16,10.803v7.656l6,3.923v1.618H10v-2h7.761l-3.761-2.459V10h-4v9.541l-3.761,2.459h1.761v2H2v-1.618l6-3.923v-7.656l-2.281,3.422-4.171,2.727-1.095-1.674,3.829-2.503,2.293-3.439c.558-.836,1.491-1.336,2.496-1.336h5.859c1.005,0,1.938,.5,2.496,1.336l2.293,3.439,3.829,2.503-1.095,1.674-4.171-2.727-2.281-3.422Zm-3.999-4.803c1.687,0,2.946-1.343,2.946-3s-1.26-3-2.946-3-3.054,1.343-3.054,3,1.367,3,3.054,3Z"/>
</svg>

);
