import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.899,7H0v-1C0,3.243,2.243,1,5,1h2.528c.463,0,.927,.109,1.341,.316l3.156,1.578c.138,.069,.293,.105,.447,.105h6.528c2.414,0,4.434,1.721,4.899,4ZM0,9v9c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V9H0Zm17.691,4.723l-4.549,4.354c-1.242,1.239-3.275,1.227-4.517-.016l-1.837-1.858c-.388-.393-.384-1.026,.008-1.414,.393-.39,1.026-.386,1.415,.008l1.833,1.854c.466,.467,1.23,.467,1.7-.004l4.564-4.37c.399-.382,1.033-.368,1.414,.031,.382,.398,.368,1.032-.031,1.414Z"/>
</svg>

);
