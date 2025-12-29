import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHighlighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.238,3.555l-2.793-2.793c-.975-.975-2.543-1.02-3.57-.101L2,13.927v7.366l-1.854,1.854,.707,.707,1.854-1.854h7.366L23.339,7.125c.918-1.028,.874-2.597-.101-3.57ZM3,14.707l6.293,6.293H3v-6.293ZM22.593,6.459l-12.457,13.97L3.571,13.864,17.541,1.407c.635-.566,1.598-.537,2.197,.062l2.793,2.793c.6,.6,.627,1.564,.062,2.197Z"/></svg>

);
