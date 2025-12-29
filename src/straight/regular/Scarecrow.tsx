import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scarecrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,8h-8.061c.666-.89,1.061-2.011,1.061-3.227v-.773h2v-2h-2.005c-.074-1.115-1.004-2-2.137-2h-5.715c-1.134,0-2.064.885-2.137,2h-2.005v2h2v1c0,1.084.358,2.14,1.001,3H0v2h2v5h3v7h6v2h2v-2h6v-7h3v-5h2v-2Zm-9-4v.773c0,1.694-1.272,3.14-2.838,3.222-.842.047-1.625-.247-2.227-.818-.604-.572-.936-1.346-.936-2.177v-1h6Zm5,9h-3v7H7v-7h-3v-3h16v3Z"/></svg>

);
