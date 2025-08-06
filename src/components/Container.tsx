
import styles from './Container.module.css'
type ContaineraProps = {
    children: React.ReactNode;
}
export function Container({children} : ContaineraProps) {
    return (
 <div className={styles.container}>
          <div className={styles.content}>{children}
          </div>
        </div>

    );


}