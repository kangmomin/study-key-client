import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/PracticeShortcut.module.css';
import { shortcuts } from '@/public/shortcuts';
import { useEffect, useState } from 'react';

const PracticeShortcut = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentKeyIdx, setCurrentKeyIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  
  const changeButton = () => {
    setVisible(!visible);
  }

  useEffect(() => {
    const handler = (e) => {
      if(e.key === shortcuts[currentIdx].combination[currentKeyIdx]) {
        if(e.key === 'Alt' || e.key === 'Tab') e.preventDefault();
        if(e.key === shortcuts[currentIdx].combination[shortcuts[currentIdx].combination.length-1]) {
          setVisible(!visible);
        }
        setCurrentKeyIdx(idx => {
          if(idx + 1 === shortcuts[currentIdx].combination.length) {
            e.preventDefault();
            return 0;
          } else {
            return idx + 1;
          } 
        })
      }
    }
    window.addEventListener("keyup", handler);
    
    return () => {
      window.removeEventListener("keyup", handler);
    }
  }, [currentIdx, currentKeyIdx]);
  
  const shortcut = shortcuts[currentIdx];

  if(currentIdx === shortcuts.length-1) {
    return (
      <div>
        <h1>끝</h1>
        <button onClick={() => {
          setCurrentIdx(0)
          setCurrentKeyIdx(0)
        }}>다시 하기</button>
      </div>
    )
  }

  console.log(visible)
  return (
    <>
      <Navbar />
      <div className={styles.container}>
      <Sidebar isStudy={false} isSelected={true}/>
        <div className={styles.right_container}>
          <div className={styles.title_container}>
            <p className={styles.title}>Visual Studio Code 단축어 연습</p>
            <p className={styles.title}>단축어와 의미를 익히고 따라쳐보며 암기해보세요!</p>
          </div>
          <div className={styles.page_container}>
            <div className={styles.current_page}>{currentIdx + 1}</div>
            <div className={styles.line}> | </div>
            <div className={styles.all_page}>{shortcuts.length}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_title}>
              {shortcut.combination.map((c, idx) => {
                if(c === shortcut.combination[currentKeyIdx]) {
                  console.log(styles)
                  return <>
                    <span className={styles.bold}>{
                      (() => {
                        switch(c) {
                          case 'Control' : return 'Ctrl';
                          case 'ArrowUp' : return '↑';
                          case 'ArrowLeft' : return '←';
                          default : return c.toUpperCase();
                        }
                      })()
                    }</span>
                    {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                  </>
                } else {
                  return <>
                    <span className={styles.text}>{
                      (() => {
                        switch(c) {
                          case 'Control' : return 'Ctrl';
                          case 'ArrowUp' : return '↑';
                          case 'ArrowLeft' : return '←';
                          default : return c.toUpperCase();
                        }
                      })()}</span>
                    {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                  </>
                }
              })}
            </div>
            <div className={styles.card_content}>{shortcut.description}</div>
          </div>
          <div className={styles.input_container}>
            {shortcut.combination.map((c, idx) => {
              if(c <= shortcut.combination[currentKeyIdx]) {
                return <>
                  <div className={styles.disa_input}>{
                    (() => {
                      switch(c) {
                        case 'Control' : return 'Ctrl';
                        case 'ArrowUp' : return '↑';
                        case 'ArrowLeft' : return '←';
                        default : return c.toUpperCase();
                      }
                    })()
                  }</div>
                  {idx === shortcut.combination.length - 1 ? null : <div className={styles.text}> + </div>}
                </>
              } else {
                return <>
                  <div className={styles.input}>{
                    (() => {
                      switch(c) {
                        case 'Control' : return 'Ctrl';
                        case 'ArrowUp' : return '↑';
                        case 'ArrowLeft' : return '←';
                        default : return c.toUpperCase();
                      }
                    })()}</div>
                  {idx === shortcut.combination.length - 1 ? null : <div className={styles.text}>+</div>}
                </>
              }
            })}
          </div>
          {
            visible ? 
            <button className={styles.enter_btn} onClick={changeButton}>
                입력 완료
            </button>
            :
            <div className={styles.btn_container}>
                <button className={styles.retry_btn}>다시하기</button>
                <button className={styles.next_btn} onClick={() => setCurrentKeyIdx(idx => idx + 1)}>
                넘어가기
                </button>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default PracticeShortcut;