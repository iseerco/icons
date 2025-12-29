import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrParagraphLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,12h5v3.5c0,.276.224.5.5.5s.5-.224.5-.5V1h3v14.5c0,.276.224.5.5.5s.5-.224.5-.5V1h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-11.5C5.691,0,3,2.691,3,6s2.691,6,6,6Zm0-11h5v10h-5c-2.757,0-5-2.243-5-5S6.243,1,9,1Zm14,18.5c0,.276-.224.5-.5.5H2.086c.072.205.19.397.353.561l2.426,2.599c.188.201.178.518-.024.706-.096.09-.219.135-.341.135-.134,0-.267-.054-.365-.159l-2.414-2.586c-.963-.962-.963-2.548.012-3.522l2.402-2.573c.189-.201.506-.212.706-.024.202.188.213.505.024.706l-2.414,2.586c-.168.168-.289.365-.362.573h20.411c.276,0,.5.224.5.5Z"/></svg>

);
