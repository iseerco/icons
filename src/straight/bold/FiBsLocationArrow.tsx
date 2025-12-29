import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLocationArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.168,7.633C.642,8.185-.229,9.687.051,11.285s1.609,2.715,3.232,2.715h6.717v6.717c0,1.622,1.116,2.951,2.714,3.231.2.035.399.053.595.053,1.365,0,2.576-.834,3.065-2.185L23.952.062,2.168,7.633Zm11.379,13.18c-.029.078-.088.222-.313.182-.233-.041-.233-.194-.233-.277v-9.717H3.283c-.083,0-.236,0-.277-.233-.041-.232.104-.285.164-.307l15.909-5.529-5.532,15.882Z"/>
</svg>

);
