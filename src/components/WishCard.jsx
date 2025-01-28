'use client'

import React from 'react'
import Image from "next/image";
import styles from "@/styles/WishCard.module.css";
import Buttons from "@/styles/Button.module.css";
import { removeTodoInput, useStore } from './store';

const WishCard = ({ todo }) => {
  const [state, dispatch] = useStore();

  return (
    <div className={styles.card}>
      <li className={styles.cardcontent}>{todo.value}</li>
      <button className={Buttons.btnicon} onClick={() => dispatch(removeTodoInput(todo.id))}>
        <Image
          src="/trash-2.svg"
          alt='delete item'
          width={16}
          height={16}
          priority
        />
      </button>
    </div>
  )
}


export default WishCard