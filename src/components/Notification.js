import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(({notification}) => notification)

  useEffect(() => {
    const clear = setTimeout(() => {
      dispatch(clearNotification())
    }, 5000);
    return () => {
      clearTimeout(clear)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (!notification) return null;

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification