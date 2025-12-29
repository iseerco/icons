import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NewsletterSubscribe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.121,17.122l6.879-6.879v-6.242c0-2.206-1.794-4-4-4H7C4.794,0,3,1.794,3,4v6.243l6.878,6.879c1.134,1.133,3.11,1.133,4.243,0Zm-6.802-8.585c-.404-.376-.428-1.009-.052-1.413.377-.405,1.011-.426,1.413-.052l1.851,1.721c.269.268.666.269.911.024l3.863-3.724c.398-.384,1.031-.371,1.414.025.384.397.372,1.031-.025,1.414l-3.851,3.712c-.504.504-1.171.756-1.839.756-.673,0-1.348-.256-1.861-.768l-1.824-1.696Zm16.681,4.171v6.292c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-6.292c0-.746.184-1.472.5-2.137l7.965,7.966c.945.944,2.2,1.464,3.536,1.464s2.591-.52,3.535-1.464l7.965-7.966c.316.665.5,1.392.5,2.137Z"/>
</svg>

);
