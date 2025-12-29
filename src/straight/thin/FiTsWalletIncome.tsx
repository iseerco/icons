import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWalletIncome = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20,14.997c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-.52-6.004c.384,0,.769-.146,1.061-.438l3.183-3.182-.707-.707-3.017,3.016V0h-1V7.721l-3.055-3.055-.707,.707,3.182,3.182c.292,.292,.677,.438,1.061,.438Zm4.447-.996l-.927,.927v14.073H3c-1.103,0-2-.897-2-2V8.484c.419,.317,.935,.513,1.5,.513h13.534l-1-1H2.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5H13v-1H2.5C1.292,3.997,.283,4.857,.051,5.997h-.051v15c0,1.654,1.346,3,3,3H24V7.997h-.073Z"/>
</svg>

);
