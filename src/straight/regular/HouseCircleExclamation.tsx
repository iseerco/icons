import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseCircleExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10.074v1.275c-.639-.791-1.412-1.465-2.281-2.002-.043-.049-.088-.097-.14-.138L12.674,2.232c-.396-.311-.952-.311-1.349,0L2.421,9.209c-.268.21-.421.524-.421.865v11.926h7.518c.506.756,1.125,1.429,1.831,2H0v-13.926c0-.96.433-1.849,1.188-2.439L10.092.658c1.123-.879,2.692-.881,3.815,0l8.906,6.977c.754.592,1.187,1.48,1.187,2.439Zm0,6.926c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-6,1h2v-5h-2v5Zm0,3h2v-2h-2v2Z"/>
</svg>

);
