import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const WeddingIcon: React.FC<IconProps> = ({
  className,
  size = 512,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    aria-hidden="true"
	color='#fff'
	fill="#fff"
	stroke="#fff"
	strokeWidth={30}
    width={size}
    height={size}
    {...rest}
  >
    {/* Male figure */}
    <path
      d="M124.824 113.474c25.88 0 46.843-20.984 46.843-46.848 0-25.881-20.963-46.84-46.843-46.84-25.877 0-46.84 20.959-46.84 46.84 0 25.864 20.964 46.848 46.84 46.848z"
    />
    <polygon
      points="104.78 131.648 104.78 155.458 124.824 148.574 144.876 155.458 144.876 131.648 124.824 138.532"
    />

    {/* Female figure */}
    <path
      d="M293.306 118.845h-9.61c0.158-0.748 0.32-1.53 0.499-2.395 3.305-15.896 10.434-49.682 14.15-64.066 3.729-14.399 11.277-24.758 20.701-31.666 9.42-6.901 20.817-10.326 32.149-10.326 11.336 0 22.738 3.425 32.157 10.326 9.424 6.908 16.968 17.267 20.702 31.666 2.473 9.569 6.476 27.826 9.835 43.581 1.683 7.898 3.209 15.181 4.315 20.484 0.179 0.865 0.34 1.646 0.494 2.395h-9.61v10.392h22.36l-1.277-6.236c-0.003-0.008-2.738-13.377-6.114-29.206-3.376-15.821-7.37-34.044-9.935-44.013-4.261-16.578-13.289-29.173-24.63-37.454C378.156 4.04 364.604 0 351.194 0c-13.402 0-26.953 4.04-38.293 12.329-11.336 8.281-20.364 20.876-24.625 37.454-2.565 9.968-6.559 28.192-9.939 44.013-3.371 15.828-6.106 29.198-6.115 29.206l-1.28 6.236h22.364v-10.393z"
    />
    <path
      d="M351.194 27.061c-21.857 0-39.561 17.7-39.561 39.565 0 21.848 17.704 39.564 39.561 39.564 21.866 0 39.573-17.716 39.573-39.564 0-21.865-17.707-39.565-39.573-39.565z"
    />

    {/* Wedding dress and details */}
    <path
      d="M437.923 321.342V177.897c0-11.398-6.24-23.345-15.31-32.382-8.239-8.164-18.831-13.951-29.223-14.865-0.96-0.083-1.879-0.133-2.842-0.133h-59.964c-2.44 0-4.88 0.133-7.274 0.407-3.683 0.441-7.279 1.164-10.754 2.195-11.119 3.284-21.154 9.594-28.953 18.198-4.352 4.747-7.989 10.235-10.79 16.303l-35.654 77.883-35.654-77.9c-6.905-15.09-19.254-26.554-34.099-32.514l-43.83 68.612-46.345-72.537c-20.655 4.04-40.853 26.205-40.853 46.732v157.429c0 11.348 9.195 20.56 20.543 20.56h14.341l7.806 134.258c0 12.072 9.802 21.857 21.878 21.857h47.766c12.076 0 21.873-9.785 21.873-21.857l7.811-134.258 3.43-126.268 41.165 89.954c1.243 2.71 6.048 8.92 13.984 8.92l0.017 0.008c8.356 0 13.074-6.202 14.312-8.929l40.222-87.826 3.837 38.983c-9.237 14.507-60.57 93.787-66.443 174.264h82.43l4.802 49.134c0 8.796 7.112 15.912 15.945 15.912h34.826c8.792 0 15.909-7.116 15.909-15.912l7.2-49.134h85.59c-17.833-45.06-35.666-90.12-52.218-123.333zM240.401 434.599c5.961-47.048 28.138-102.45 63.209-157.478l0.52-0.814 1.928-3.027-0.353-3.567-3.837-38.983-7.441-75.604c5.533-5.155 12.105-9.071 19.296-11.473 1.081 21.159 3.018 56.234 39.008 56.234 37.05 0 37.744-36.04 38.16-57.564 0.009-0.474 0.016-0.94 0.025-1.397 0.541 0 1.064 0.033 1.554 0.075 6.199 0.548 13.156 3.725 19.28 8.713l-11.997 121.43-0.349 3.55 1.891 3.01 0.295 0.466c4.652 7.399 15.551 24.734 27.028 47.812 19.172 38.468 31.339 75.754 35.512 108.619H240.401z"
    />
  </svg>
);

export default React.memo(WeddingIcon);
