'use client';

import React, { useState } from 'react'
import { useStore, addTodoInput, clearTodoInput } from './store';
import { generateUniqueString } from '@/func';
import WishCard from './WishCard';
import Buttons from "@/styles/Button.module.css";
import Wish from "@/styles/Wish.module.css";
import Image from "next/image";

const WishNote = () => {
  const [state, dispatch] = useStore();
  const [wish, setWish] = useState('');
  const [isSentWished, setIsSentWished] = useState(false);
  const [isShowQRCode, setIsShowQRCode] = useState(false);
  const { todos } = state;

  const addWish = () => {
    dispatch(addTodoInput({
      id: generateUniqueString(),
      value: wish
    }));
    setWish('');
  }

  const saveWish = async () => {
    if (!todos.length) return;
    try {
      const response = await fetch('/api/saveTodos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todos }),
      });

      await response.json();
      dispatch(clearTodoInput());
      setIsSentWished(true);
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  }

  if (isSentWished) {
    if (isShowQRCode) {
      return (
        <div className={Wish.qrCode}>
          <Image src="/qr-code.jpg" alt="QR Code" width={200} height={200} />
          <p>Lì xì để thần rắn lắp chân vào chạy nha 🐍💨💨💨</p>
          <div className={Wish.secondaryAct}>
            <button className={`${Buttons.button} ${Buttons.secondary}`} onClick={() => {
              setIsShowQRCode(false);
              setIsSentWished(false);
            }}>Write new wish</button>
          </div>
        </div>)
    }
    return (
      <div>
        <p>Điều ước của bạn đã được thần rắn mang đi rồi nhé! 🐍✨ Chúc bạn một năm 2025 tràn đầy năng lượng và thành công! 🎉🎉🎉</p>
        <div className={Wish.secondaryAct}>
          <button className={`${Buttons.button} ${Buttons.secondary}`} onClick={() => setIsSentWished(false)}>Write new wish</button>
          <button className={Buttons.btnLink} onClick={() => setIsShowQRCode(true)}>Do you want your wish to be granted by the snake moving faster? 😄😄😄</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h4>Hãy viết gì đó vào năm 2025 nhé ( • _ • ) </h4>

      <div className={Wish.act}>
        <input value={wish} placeholder='Enter wish...' onChange={e => setWish(e.target.value)} />
        <button className={`${Buttons.button} ${Buttons.primary}`} onClick={addWish}>Add wish</button>
      </div>
      <ol>
        {
          todos.map((todo) => (
            <WishCard key={todo.id} todo={todo} />
          ))
        }
      </ol>

      {
        todos.length > 0 && (<div className={Wish.sent}>
          <button className={`${Buttons.button} ${Buttons.secondary}`} onClick={saveWish}>
            <span>Sent wishes</span>
          </button>
        </div>)
      }
    </div>
  )
}

export default WishNote