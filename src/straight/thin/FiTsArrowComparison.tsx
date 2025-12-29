import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowComparison = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.146,10.146l.707.707-8.854,8.854-5-5L1.707,23h5.293v1H1.5c-.827,0-1.5-.673-1.5-1.5v-5.5h1v5.293l9-9,5,5,8.146-8.146Zm-.646-10.146h-5.5v1h5.293l-8.293,8.293-5-5L.146,13.146l.707.707L9,5.707l5,5L23,1.707v5.293h1V1.5c0-.827-.673-1.5-1.5-1.5Z"/>
</svg>

);
