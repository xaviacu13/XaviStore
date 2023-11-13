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
    position: "relative",
    display: "inline-block",
    textAlign: "center",
  },
  title: {
    color: "white",
    position: "absolute",
    top: "85%",
    left: "70%",
  },
}))

export default useStyles