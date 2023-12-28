import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './CardSkeleton.module.css'

export const CardSkeleton = () => {
  return (
    <>
      <div className={styles.conteinerCardsFather}>
        <div className={styles.containerCardsSkeleton}>
          {
            Array(9).fill(0).map((row, index) => (
              <div key={index} className={`${styles.containerSkeleton} row-column-skeleton`}>
                <div className={styles.descriptionSkeleton}>
                  <p><Skeleton height={40} /></p>
                  <p><Skeleton /></p>
                </div>
                <div className={styles.infoContainerSkeleton}>
                  <Skeleton height={120} width={180}/>
                </div>
                <div className={styles.buttonSkeleton}>
                  <Skeleton height={37} width={180}/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.paginadoSkeleton}>
        <Skeleton className={styles.buttonsPaginationSkeleton} width={1030} />
      </div>
    </>
  )
}
