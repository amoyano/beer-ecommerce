function PlusIcon({ className, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <rect x="11" y="5" width="2" height="14" rx="1" fill="white" />
      <rect x="5" y="13" width="2" height="14" rx="1" transform="rotate(-90 5 13)" fill="white" />
    </svg>
  )
}

export default PlusIcon
