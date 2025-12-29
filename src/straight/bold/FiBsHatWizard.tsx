import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHatWizard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.5,17.5l-2,1-1,2-1-2-2-1,2-1,1-2,1,2,2,1Zm-5-3.5l.833-1.667,1.667-.833-1.667-.833-.833-1.667-.833,1.667-1.667.833,1.667.833.833,1.667Zm12.5,7v3H0v-3h1.287L7.778,4.988c.716-1.767,2.264-3.019,4.141-3.35L21.175.005l-4.022,8.043,5.551,12.952h1.296Zm-19.476,0h14.915l-5.592-13.048,1.978-3.957-3.384.597c-.853.15-1.557.72-1.882,1.523l-6.035,14.885Z"/></svg>

);
