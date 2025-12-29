import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraCctv = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.961,11.351l3.054-2.184L8.298.361c-1.448-.783-3.27-.244-4.059,1.202l-1.821,3.336c-.792,1.452-.256,3.278,1.182,4.063l6.048,3.429-1.642,4.925c-.136.409-.518.684-.949.684H2v-4H0v10h2v-4h5.059c1.293,0,2.437-.824,2.846-2.051l1.517-4.553,6.432,3.646.995-1.823,2.203,1.221,2.011-3.686-2.203-1.222.1-.183Z"/>
</svg>

);
