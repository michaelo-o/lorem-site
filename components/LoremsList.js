import Link from 'next/link'
import Image from 'next/dist/client/image';
import Lorems from '../loremdata/Lorem site.json'
import styles from '../styles/Lorems.module.css'

const LoremsList = () => {

    const lorems = Lorems

    return (
        <>

        {lorems && lorems.map(lorem => (
          <div key={lorem.id} className={styles.card}>
            <h3>{lorem.lorem_name}</h3>
            <p>{lorem.lorem_body}</p>
          </div>
        ))}

        </>
    );
}

export default LoremsList