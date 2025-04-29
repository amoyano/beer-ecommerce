export default function DotsIcon({ className, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <circle cx="5.5" cy="11.5" r="1.5" fill="#323232" />
      <circle cx="12.5" cy="11.5" r="1.5" fill="#323232" />
      <circle cx="19.5" cy="11.5" r="1.5" fill="#323232" />
    </svg>
  )
}
