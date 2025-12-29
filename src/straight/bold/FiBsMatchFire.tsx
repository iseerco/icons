import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMatchFire = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,9.457c0-4.034-4.192-6.804-6.5-9.457-2.231,2.808-1.576,7-2.945,7-1.055,0-1.209-2.5-1.209-2.5-1.078,1.112-2.346,3.088-2.346,4.957,0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5Zm-7.915,3.957c-.781-.782-.781-2.048,0-2.829l1.415-1.415,1.415,1.415h0c.781.782.781,2.048,0,2.829-.781.781-2.048.781-2.829,0Zm5.017,6.815c-.865,1.438-1.922,2.995-2.657,3.4-1.452.798-3.276.268-4.074-1.183-.798-1.452-.268-3.276,1.183-4.074.715-.393,2.436-.601,3.998-.711l13.829-8.542,1.576,2.553-13.855,8.558Z"/>
</svg>

);
