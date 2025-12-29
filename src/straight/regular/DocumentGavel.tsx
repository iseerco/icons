import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DocumentGavel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2,22V3c0-.551,.449-1,1-1H11v7h7.935l1.065,1.065v-2.479L12.414,0H3C1.346,0,0,1.346,0,3V24H13.883l-2-2H2ZM13,3.414l3.586,3.586h-3.586V3.414Zm9.562,20.562l1.414-1.414-4.225-4.226,1.432-1.432,.537,.537,1.414-1.414-5.312-5.312-1.414,1.414,.537,.537-4.369,4.369-.537-.537-1.414,1.414,5.312,5.312,1.414-1.414-.537-.537,1.523-1.523,4.225,4.226Zm-8.572-5.526l4.369-4.369,1.409,1.409-4.369,4.369-1.409-1.409Z"/>
</svg>

);
