import styles from './styles.module.css'


function Main() {
    const handleLogout=()=>{
        localStorage.removeItem("token")
        window.location.reload();
    }
  return (
    <div className={styles.main_container}>
        <nav className={styles.white_btn} onClick={handleLogout}></nav></div>
  )
}

export default index