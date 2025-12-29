import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChevronDoubleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.148,11.973l-9.38,9.295c-.944,.945-2.589,.947-3.537-.002L.852,11.973c-.196-.194-.513-.192-.707,.004-.194,.195-.193,.513,.003,.707l9.377,9.291c.661,.661,1.54,1.025,2.475,1.025s1.814-.364,2.473-1.023l9.379-9.293c.196-.194,.197-.512,.003-.707-.194-.196-.51-.198-.707-.004Z"/><path d="M23.149,1.644L13.06,11.561c-.565,.566-1.551,.569-2.124-.003L.851,1.644c-.198-.194-.514-.192-.707,.006-.194,.197-.191,.514,.006,.707L10.232,12.268c.472,.473,1.1,.732,1.768,.732s1.296-.26,1.765-.729L23.851,2.356c.197-.193,.2-.51,.006-.707-.193-.198-.51-.2-.707-.006Z"/></svg>

);
