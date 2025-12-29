import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentSmile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12v-12C24,5.383,18.617,0,12,0Zm9,21h-9c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9v9Zm-5.296-8.195l1.611,2.53c-.977.622-2.965,1.665-5.315,1.665s-4.336-1.041-5.311-1.661l1.611-2.531c.562.359,2.051,1.192,3.699,1.192s3.14-.835,3.704-1.195Zm-8.704-3.305c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm7,0c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/></svg>

);
