import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaseStudy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.328,13h1.932c-.422,.604-.751,1.277-.966,2h-1.794l-1-1H2v1c0,.551,.449,1,1,1h7.08c-.047,.327-.08,.66-.08,1s.033,.673,.08,1H3c-1.654,0-3-1.346-3-3v-3H2V0H22V12.112c-.574-.586-1.25-1.073-2-1.43V2H4V12h4.328l1,1Zm13.217,10.959l-2.792-2.792c-.791,.524-1.736,.833-2.753,.833-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5c0,1.017-.309,1.962-.833,2.753l2.792,2.792-1.414,1.414Zm-5.545-3.959c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Z"/>
</svg>

);
