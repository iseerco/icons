import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGolfHole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M10.5,16.5V2.005C10.5,.001,12.252-.26,13.125,.177l6.161,4.153c1.045,.773,.921,2.372-.23,2.974l-5.556,2.725v6.471c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5Zm7.461-5.613c-.79-.257-1.634,.179-1.889,.966-.254,.789,.179,1.634,.967,1.889,2.406,.776,3.961,2.055,3.961,3.258,0,1.888-3.849,4-9,4s-9-2.112-9-4c0-1.203,1.555-2.482,3.961-3.258,.788-.255,1.221-1.1,.967-1.889-.255-.788-1.098-1.224-1.889-.966-3.781,1.22-6.039,3.506-6.039,6.113,0,3.991,5.159,7,12,7s12-3.009,12-7c0-2.607-2.258-4.893-6.039-6.113Z"/>
</svg>

);
