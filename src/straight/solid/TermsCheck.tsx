import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TermsCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,0H3C1.346,0,0,1.346,0,3V24H12.627l-3.74-3.864,4.312-4.172,3.08,3.184,1.72-1.696V3c0-1.654-1.346-3-3-3Zm-7,17H4v-2h4v2Zm6-5H4v-2H14v2Zm0-5H4v-2H14v2Zm2.289,17c-.555,0-1.076-.216-1.468-.609l-3.105-3.209,1.438-1.391,3.094,3.198,6.17-6.085,1.414,1.414-6.074,6.074c-.392,.392-.913,.608-1.468,.608Z"/>
</svg>

);
