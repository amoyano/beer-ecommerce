const ArrowIcon = ({ className, ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <rect x="5" y="11" width="15" height="1.5" fill="#323232"/>
      <path d="M11 5.20001L4 11.7L11 18.2" stroke="#323232" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  )
}

export default ArrowIcon
