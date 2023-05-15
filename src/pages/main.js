import styles from "@/styles/Main.module.css";
import React from "react";
import Navbar from "../component/Navbar";
import SelectTool from "../component/SelectTool";
import Sidebar from "../component/Sidebar";

const Main = () => {
  const developer_tools = [
    {
      "img" : "vscode.png",
      "name" : "Visual Studio Code",
      "info" : "ㅂㅇㅇㅅㅋㄷ 설명~"
    },
    {
      "img" : "intellij.png",
      "name" : "IntelliJ",
      "info" : "인텔리제잇 설명~"
    }
  ]

  const designer_tools = [
    {
      "img" : "photoshop.png",
      "name" : "Adobe Photoshop",
      "info" : "뽀토샵 설명~"
    },
    {
      "img" : "illustrator.png",
      "name" : "Adobe Illustrator",
      "info" : "ㅇㄹㅅㅌㄹㅇㅌ 설명~"
    }
  ]

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.contents}>
          <h2>Welcome!</h2>
          <h3>필요한 툴의 단축키를 학습해보세요!</h3>
          <div className={styles.contents_container}>
            <SelectTool tools={developer_tools} job_en="developer" job_ko="개발자" background_color="#CAB0FF"/>
            <SelectTool tools={designer_tools} job_en="designer" job_ko="디자이너" background_color="#95ACFF"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
