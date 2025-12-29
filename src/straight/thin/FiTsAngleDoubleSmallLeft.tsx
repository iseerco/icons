import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleDoubleSmallLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10.721,18.342l-5.281-5.281c-.283-.283-.439-.66-.439-1.061s.156-.777.439-1.061l5.281-5.281.707.707-5.281,5.281c-.094.095-.146.22-.146.354s.052.259.146.354l5.281,5.281-.707.707Zm8.052-.707l-5.635-5.635,5.635-5.635-.707-.707-5.871,5.871c-.26.26-.26.683,0,.942l5.871,5.871.707-.707Z"/>
</svg>

);
