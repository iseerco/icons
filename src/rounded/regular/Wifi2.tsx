import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Wifi2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,19c0-1.1,.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Zm8.67-4.65c.4-.38,.43-1.01,.05-1.41-1.73-1.87-4.18-2.94-6.72-2.94s-4.99,1.07-6.72,2.94c-.38,.4-.35,1.04,.05,1.41,.4,.38,1.04,.35,1.41-.05,1.35-1.46,3.27-2.29,5.26-2.29s3.9,.84,5.26,2.29c.2,.21,.46,.32,.73,.32,.24,0,.49-.09,.68-.27Z"/></svg>

);
