import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsHCopy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.465,22.777V1.223l3.766,3.766,.707-.707L13.146,.489c-.315-.315-.734-.489-1.181-.489h0c-.445,0-.864,.174-1.179,.489l-3.793,3.792,.707,.707,3.766-3.765V22.776l-3.766-3.765-.707,.707,3.793,3.792c.314,.315,.733,.489,1.179,.489h0c.446,0,.865-.174,1.181-.489l3.792-3.792-.707-.707-3.766,3.766Z"/></svg>

);
