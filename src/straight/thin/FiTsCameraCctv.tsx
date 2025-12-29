import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCameraCctv = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.944,12.13l-2.928-1.604.009-.016,2.507-1.792L8.509.301c-1.208-.653-2.725-.204-3.383,1.001l-1.821,3.336c-.66,1.21-.213,2.731.99,3.388l6.406,3.632-1.772,5.315c-.205.614-.777,1.026-1.423,1.026H1v-5H0v11h1v-5h6.507c1.078,0,2.031-.687,2.372-1.709l1.71-5.129,6.519,3.696.595-1.09,2.928,1.604,2.314-4.24Zm-6.228,2.355L4.782,7.153c-.726-.396-.994-1.31-.598-2.035l1.821-3.336c.272-.499.791-.782,1.321-.782.238,0,.479.057.701.177l13.643,7.644-1.319.943-2.634,4.722Zm1.465-.597l1.356-2.485,2.051,1.123-1.356,2.484-2.051-1.123Z"/>
</svg>

);
