import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.707,22.293l-1.546-1.546c.537-.813,.839-1.761,.839-2.747v-5.69c0-3.433-1.501-6.648-4.119-8.822C16.373,1.403,13.204,.594,9.962,1.195c-1.838,.343-3.545,1.156-4.989,2.364L1.707,.293C1.316-.098,.684-.098,.293,.293S-.098,1.316,.293,1.707L22.293,23.707c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414Zm-4.981,.675c-.104,.007-.203,.031-.309,.031h-5.423c-6.418,0-11.562-4.393-11.966-10.217-.15-2.161,.35-4.284,1.38-6.133L18.726,22.968Z"/></svg>

);
