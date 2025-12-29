import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SummaryCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,9H5v-2H15v2Zm9,8c0,3.86-3.141,7-7,7s-7-3.14-7-7,3.141-7,7-7,7,3.14,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-2.411-2.307l-3.228,3.174-1.63-1.58-1.393,1.437,1.845,1.788c.314,.315,.733,.489,1.179,.489s.865-.174,1.173-.482l3.456-3.399-1.402-1.426Zm-14.589-1.693h3.947c.363-.729,.82-1.4,1.359-2H5v2Zm4.536,9H3c-.552,0-1-.449-1-1V4H18v4.064c.693,.08,1.363,.233,2,.459V2h-3V0h-2V2h-2V0h-2V2h-2V0h-2V2h-2V0H3V2H0V21c0,1.654,1.346,3,3,3H11.349c-.703-.569-1.31-1.247-1.813-2Z"/>
</svg>

);
