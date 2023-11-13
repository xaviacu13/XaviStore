import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    gap: 20,
    alignItems: "center",
    flexDirection: "column",
    border: "solid",
    borderColor: 'GrayText',
    padding: 5,
  },
  container: {
    gap: 10,
  },
  title: {
    backgroundColor: rgba(0,0,0,0.8),
    marginBottom: -20,
  },
}))

export default useStyles