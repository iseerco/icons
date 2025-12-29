import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDocumentCircleWrong = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm3.536,8.121l-1.414,1.414-2.121-2.121-2.121,2.121-1.414-1.414,2.121-2.121-2.121-2.121,1.414-1.414,2.121,2.121,2.121-2.121,1.414,1.414-2.121,2.121,2.121,2.121Zm-8.813,3.88l-12.722.003V2.997C0,1.342,1.346-.003,3-.003h11.382l5.618,5.665v4.601c-.64-.165-1.308-.262-2-.262-.339,0-.672.028-1,.069v-2.072h-5V2.997H3v18.005h7.588c.471,1.162,1.208,2.184,2.135,2.999Z"/>
</svg>

);
