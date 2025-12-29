import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockTimeTracking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v5h1v16h10.344c-.705-.57-1.322-1.245-1.828-2H3v-14h18v.936c.728.362,1.4.819,2,1.356v-2.292h1V3c0-1.654-1.346-3-3-3ZM2,3c0-.551.449-1,1-1h18c.552,0,1,.449,1,1v3H2v-3Zm15,7c-3.859,0-7,3.14-7,7s3.141,7,7,7,7-3.14,7-7-3.141-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm1-5.414l1.707,1.707-1.414,1.414-2.293-2.293v-3.414h2v2.586Z"/>
</svg>

);
