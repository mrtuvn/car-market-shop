const ClockIcon: React.FC<React.SVGAttributes<{}>> = ({ ...rest }) => {
  return (
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" {...rest}>
      <path
        d="M9 6.32422C8.79167 6.32422 8.61589 6.40234 8.47266 6.55859C8.32943 6.70182 8.25781 6.8776 8.25781 7.08594V10.8359C8.04948 10.9531 7.86719 11.1354 7.71094 11.3828C7.56771 11.6172 7.49609 11.8776 7.49609 12.1641C7.49609 12.5807 7.63932 12.9388 7.92578 13.2383C8.22526 13.5247 8.58333 13.668 9 13.668C9.41667 13.668 9.76823 13.5247 10.0547 13.2383C10.3542 12.9388 10.5039 12.5807 10.5039 12.1641C10.5039 11.8776 10.4258 11.6172 10.2695 11.3828C10.1263 11.1354 9.95052 10.9531 9.74219 10.8359V7.08594C9.74219 6.8776 9.67057 6.70182 9.52734 6.55859C9.38411 6.40234 9.20833 6.32422 9 6.32422ZM17.1641 13.0039C16.9557 12.9648 16.7604 13.0039 16.5781 13.1211C16.3958 13.2253 16.2852 13.3815 16.2461 13.5898C16.1289 14.2148 15.888 14.7682 15.5234 15.25C15.1589 15.7318 14.7096 16.1224 14.1758 16.4219L11.168 18.1602C10.5039 18.5378 9.79427 18.7266 9.03906 18.7266C8.29688 18.7266 7.58724 18.5378 6.91016 18.1602L3.92188 16.4219C3.25781 16.0443 2.73047 15.5234 2.33984 14.8594C1.94922 14.1953 1.75391 13.4661 1.75391 12.6719V9.50781C1.75391 8.71354 1.94922 7.98438 2.33984 7.32031C2.73047 6.64323 3.25781 6.1224 3.92188 5.75781L6.91016 4C7.58724 3.6224 8.29688 3.43359 9.03906 3.43359C9.79427 3.43359 10.5039 3.6224 11.168 4L14.1758 5.75781C14.8398 6.1224 15.3607 6.64323 15.7383 7.32031C16.1289 7.98438 16.3242 8.71354 16.3242 9.50781C16.3242 9.71615 16.3958 9.89193 16.5391 10.0352C16.6953 10.1784 16.8776 10.25 17.0859 10.25C17.2943 10.25 17.4701 10.1784 17.6133 10.0352C17.7565 9.89193 17.8281 9.71615 17.8281 9.50781C17.8281 8.98698 17.7565 8.47266 17.6133 7.96484C17.4831 7.47005 17.2878 7.0013 17.0273 6.55859C16.7669 6.11589 16.4479 5.71224 16.0703 5.34766C15.7057 4.98307 15.2956 4.67057 14.8398 4.41016L11.832 2.75C10.9596 2.25521 10.0091 2.00781 8.98047 2.00781C7.96484 2.00781 7.0013 2.25521 6.08984 2.75L3.08203 4.50781C2.6263 4.75521 2.20964 5.0612 1.83203 5.42578C1.46745 5.79036 1.15495 6.19401 0.894531 6.63672C0.634115 7.07943 0.432292 7.54818 0.289062 8.04297C0.145833 8.55078 0.0742188 9.0651 0.0742188 9.58594V12.75C0.0742188 13.2708 0.145833 13.7786 0.289062 14.2734C0.432292 14.7812 0.634115 15.2565 0.894531 15.6992C1.15495 16.1419 1.46745 16.5456 1.83203 16.9102C2.20964 17.2747 2.6263 17.5807 3.08203 17.8281L6.08984 19.5859C6.54557 19.7943 7.02083 19.957 7.51562 20.0742C8.01042 20.1914 8.50521 20.25 9 20.25C9.49479 20.25 9.98307 20.1849 10.4648 20.0547C10.9596 19.9375 11.4154 19.7552 11.832 19.5078L14.8398 17.75C15.582 17.3333 16.194 16.7865 16.6758 16.1094C17.1706 15.4193 17.5026 14.6576 17.6719 13.8242C17.75 13.668 17.737 13.5052 17.6328 13.3359C17.5286 13.1536 17.3724 13.043 17.1641 13.0039ZM2.92578 3.74609C3.00391 3.74609 3.06901 3.73958 3.12109 3.72656C3.17318 3.71354 3.24479 3.66797 3.33594 3.58984L6.32422 1.57812C6.49349 1.46094 6.59766 1.30469 6.63672 1.10938C6.6888 0.914062 6.66927 0.71224 6.57812 0.503906C6.46094 0.373698 6.30469 0.295573 6.10938 0.269531C5.91406 0.230469 5.71224 0.25 5.50391 0.328125L2.49609 2.41797C2.32682 2.54818 2.22266 2.70443 2.18359 2.88672C2.15755 3.06901 2.20964 3.24479 2.33984 3.41406C2.37891 3.54427 2.45052 3.63542 2.55469 3.6875C2.67188 3.72656 2.79557 3.74609 2.92578 3.74609ZM14.6641 3.66797C14.7552 3.70703 14.8268 3.74609 14.8789 3.78516C14.931 3.8112 14.9961 3.82422 15.0742 3.82422C15.2044 3.82422 15.3281 3.80469 15.4453 3.76562C15.5625 3.71354 15.6667 3.6224 15.7578 3.49219C15.875 3.33594 15.9141 3.15365 15.875 2.94531C15.8359 2.72396 15.7122 2.54818 15.5039 2.41797L12.4961 0.425781C12.3268 0.295573 12.1315 0.25 11.9102 0.289062C11.7018 0.328125 11.5391 0.451823 11.4219 0.660156C11.2917 0.829427 11.2461 1.02474 11.2852 1.24609C11.3372 1.45443 11.4674 1.6237 11.6758 1.75391L14.6641 3.66797Z"
        fill="#DD3842"
      />
    </svg>
  )
}

export default ClockIcon
