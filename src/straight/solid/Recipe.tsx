import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Recipe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.974,0c.635.838,1.026,1.87,1.026,3,0,1.598-.766,3.07-2,3.999v2.001h8v2H4v13h13v-7h7V0h-11.026Zm.026,19h-5v-2h5v2Zm7-4h-12v-2h12v2Zm-10-6H2v-3.171c-1.164-.413-2-1.525-2-2.829C0,1.346,1.346,0,3,0c.488,0,.965.124,1.395.357C5.403-.113,6.597-.113,7.605.357c.429-.233.907-.357,1.395-.357,1.654,0,3,1.346,3,3,0,1.304-.836,2.416-2,2.829v3.171Zm9,14.414v-4.414h4.414l-4.414,4.414Z"/>
</svg>

);
