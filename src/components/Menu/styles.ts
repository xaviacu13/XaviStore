import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    gap: 20,
    alignItems: "center",
    border: "solid",
    borderColor: 'GrayText',
    padding: 5,
  },
  container: {
    gap1: 10,
  },
}))

export default useStyles