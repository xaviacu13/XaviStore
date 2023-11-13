import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    gap: 20,
    alignItems: "center",
    border: "solid",
    borderColor: 'GrayText',
    padding: 8,
    justifyContent: "space-between",
  },
  container: {
    gap1: 10,
  },
  buttonContainer: {
    display: "flex",
  },
  contentLogo: {
    display: "flex",
    gap: 8,
  },
}))

export default useStyles