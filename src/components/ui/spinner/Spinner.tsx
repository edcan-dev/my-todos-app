import './Spinner.css';

interface Props {
  width: number
}


export const Spinner = ( { width }: Props ) => {
  return (
    <svg className="spinner" width={ width } viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" />
    </svg>

  )
}
