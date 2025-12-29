import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsDownCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,23v1H0v-1H24Zm-12-2s.002,0,.004,0c7.297-.002,11.79-5.228,11.978-5.45l-.765-.645c-.043,.051-4.377,5.094-11.215,5.095-6.822,0-11.178-5.045-11.221-5.096L.018,15.55c.188,.223,4.685,5.448,11.982,5.45Zm-3.644-8.442l-.707,.707,3.301,3.301c.58,.58,1.525,.58,2.105,0l3.301-3.301-.707-.707-3.147,3.147-.002-8.704h-1l.002,8.704-3.146-3.146ZM19,1.296V10h1V1.296l3.146,3.146,.707-.707L20.553,.435c-.58-.581-1.525-.58-2.105,0l-3.301,3.3,.707,.707,3.146-3.146ZM4,1.296V10h1V1.296l3.146,3.146,.707-.707L5.553,.435C4.973-.146,4.027-.145,3.447,.435L.146,3.735l.707,.707L4,1.296Z"/>
</svg>

);
