import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.5,19c.276,0,.5-.224,.5-.5v-5.599c.124,.321,.31,.617,.561,.867l5.086,5.086c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707L2.268,13.061c-.16-.16-.275-.353-.348-.561H23.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H1.919c.074-.208,.188-.4,.348-.561L7.354,5.854c.195-.195,.195-.512,0-.707s-.512-.195-.707,0L1.561,10.232c-.251,.25-.437,.546-.561,.867V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v13c0,.276,.224,.5,.5,.5Z"/></svg>

);
