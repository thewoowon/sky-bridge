import styles from './Bounce.module.css';

type BounceProps = {
  width?: number;
  height?: number;
};

const Bounce = ({ width = 24, height = 24 }: BounceProps) => {
  return (
    <div
      className={styles.spinner}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className={styles.doubleBounce1}></div>
      <div className={styles.doubleBounce2}></div>
    </div>
  );
};

export default Bounce;
