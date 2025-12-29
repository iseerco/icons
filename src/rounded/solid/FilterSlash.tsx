import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilterSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.707,22.293l-7.414-7.414,4.345-4.478c.903-.93,1.4-2.155,1.4-3.451,0-2.73-2.221-4.951-4.951-4.951H6.951c-.973,0-1.909,.297-2.712,.825L1.707,.293C1.316-.098,.684-.098,.293,.293S-.098,1.316,.293,1.707L22.293,23.707c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414Zm-8.707-3.051v3.758c0,.379-.214,.725-.553,.895-.142,.071-.295,.105-.447,.105-.212,0-.423-.068-.6-.2l-4-3c-.252-.188-.4-.485-.4-.8v-3.844L3.362,10.401c-.903-.93-1.4-2.155-1.4-3.451,0-.235,.028-.462,.06-.687l12.978,12.978Z"/></svg>

);
