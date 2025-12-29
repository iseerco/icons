import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DocumentCircleArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.518,22H2V3c0-.551,.449-1,1-1H11v7h9v-1.414L12.414,0H3C1.346,0,0,1.346,0,3V24H11.349c-.706-.571-1.325-1.244-1.831-2ZM13,3.414l3.586,3.586h-3.586V3.414Zm4,6.586c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7-3.14-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm3.431-5h-2.431v3h-2v-3h-2.454l2.687-2.687c.417-.417,1.093-.417,1.51,0l2.688,2.687Z"/>
</svg>

);
